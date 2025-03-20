import React, { useRef, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { Card, CardFooter, Image, Chip } from '@heroui/react';
import { Link } from '@inertiajs/react';

const ParticleEffect = ({ active }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!active || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const particles = [];
        const particleCount = 15;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 10;
                this.size = Math.random() * 5 + 1;
                this.speedY = -Math.random() * 1 - 0.5;
                this.color = this.getColor();
                this.opacity = Math.random() * 0.6 + 0.3;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 2 - 1;
            }

            getColor() {
                const colors = ['#FFD700', '#FFA500', '#FFFF00', '#87CEFA'];
                return colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.y += this.speedY;
                this.rotation += this.rotationSpeed;

                if (this.y < -this.size * 2) {
                    this.y = canvas.height + Math.random() * 10;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation * Math.PI / 180);
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                ctx.beginPath();

                // Draw star shape
                const spikes = 5;
                const outerRadius = this.size;
                const innerRadius = this.size / 2;

                for (let i = 0; i < spikes * 2; i++) {
                    const radius = i % 2 === 0 ? outerRadius : innerRadius;
                    const angle = (i * Math.PI) / spikes;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let animationId;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, [active]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
        />
    );
};

const Best = () => {
    const { product_best } = usePage().props;

    return (
        <div className="flex flex-col items-center sm:gap-2">
            <h3 className="text-xl sm:text-4xl font-semibold flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 animate-bounce">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                Best of the Blast
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 animate-bounce">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
            </h3>
            <span className="text-center text-[10px] sm:text-sm mx-8 sm:mx-2">
                Waktunya kamu berpartisipasi untuk menjadi yang terbaik saat ini!
            </span>
            <div className="max-w-[500px] gap-2 grid grid-cols-3 sm:grid-cols-12 grid-rows-auto sm:grid-rows-1 px-8 mt-2">
                {product_best.map((item, i) => (
                    <div
                        key={i}
                        className="sm:col-span-4 relative overflow-hidden rounded-lg transform transition-transform duration-300 hover:-translate-y-2"
                    >
                        <Link
                            href={route('customer.checkout', {
                                slug: item.product.slug
                            })}
                            className="block h-full group"
                        >
                            <Card className="w-full h-full border-0">
                                <div className="relative w-full h-full overflow-hidden">
                                    <ParticleEffect active={true} />

                                    <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-400 animate-spin-slow">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 z-10 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out"></div>

                                    <Image
                                        removeWrapper
                                        alt={item.product.name}
                                        className="z-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        src={route('stream', {
                                            path: item.product.image.path
                                        })}
                                    />

                                    <div className="sm:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1">
                                        <p className="text-[8px] text-white text-center font-medium truncate">
                                            {item.product.name}
                                        </p>
                                    </div>

                                    <div className="hidden sm:block absolute inset-x-1 -bottom-20 group-hover:bottom-1 transition-all duration-300 ease-out rounded-lg overflow-hidden">
                                        <CardFooter className="flex flex-col gap-2 text-center justify-between before:bg-white/10 dark:before:bg-black/10 border-white/20 dark:border-gray-800/40 border-1 overflow-hidden py-1 rounded-lg shadow-sm z-10 backdrop-blur-md bg-white/70 dark:bg-black/70">
                                            <Chip
                                                className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-purple-600 dark:to-blue-600 text-white transform transition-transform duration-300 hover:scale-105"
                                                size='sm'
                                            >
                                                {item.product.brand}
                                            </Chip>

                                            <p className="text-tiny text-gray-800 dark:text-white/90 transition-all duration-300 hover:font-semibold">
                                                {item.product.name}
                                            </p>
                                        </CardFooter>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Best;
