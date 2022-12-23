<template>
    <div id="projectsSection">
        <section style="margin-top:15vh; margin-bottom: 5vh;" data-aos="fade-in" class="subtitulo" id="developer">
            {{ $t('proyects') }}
        </section>
        <div class="columnas">
            <section data-aos="zoom-in">
                <article class="articulo">
                        <div style="display: flex; flex-direction: row; margin: 0.5rem 1rem; align-items: center;">
                            <h3 class="textoArticulo">Portfolio</h3>
                        </div>
                        <div style="display: flex; flex-direction: row; margin: 0.5rem 1rem; align-items: center;">
                            <h3 class="subArticulo">{{ $t('portfolioDesc') }}.
                            </h3>
                        </div>
                        <a title="Portfolio" href="https://github.com/bbauti/portfolio" target="_blank" rel="noopener noreferrer">
                            <div class="git">
                                <div class="centrarFlex">
                                        <svg style="fill: #586069; margin-right: 8px;" viewBox="0 0 16 16" version="1.1"
                                            width="16" height="16" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                                            </path>
                                        </svg>
                                        <span style="font-weight: 600; color: #0366d6;">
                                            <p>Portfolio</p>
                                        </span>
                                </div>
                                <div style="font-size: 12px; margin-bottom: 16px; margin-top: 8px; color: #586069;"></div>
                                <div style="font-size: 12px; color: #586069; display: flex; white-space: nowrap; overflow: hidden;">
                                    <div style="; margin-right: 16px;">
                                        <span
                                            style="width: 12px; height: 12px; border-radius: 100%; background-color: #41b883; display: inline-block; top: 1px; position: relative;"></span>
                                        <span>Vue</span>
                                    </div>
                                    <div style="; margin-right: 16px;">
                                        <span
                                            style="width: 12px; height: 12px; border-radius: 100%; background-color: #41b883; display: inline-block; top: 1px; position: relative;"></span>
                                        <span>Nuxt</span>
                                    </div>
                                    <div style="; margin-right: 16px;">
                                        <span
                                            style="width: 12px; height: 12px; border-radius: 100%; background-color: #e34c26; display: inline-block; top: 1px; position: relative;"></span>
                                        <span>Html</span>
                                    </div>
                                    <div style="; margin-right: 16px;">
                                        <span
                                            style="width: 12px; height: 12px; border-radius: 100%; background-color: #563d7c; display: inline-block; top: 1px; position: relative;"></span>
                                        <span>Css</span>
                                    </div>
                                    <div style="; margin-right: 16px;">
                                        <span
                                            style="width: 12px; height: 12px; border-radius: 100%; background-color: #f1e05a; display: inline-block; top: 1px; position: relative;"></span>
                                        <span>JS</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                </article>
            </section>
            <section data-aos="zoom-in" data-aos-delay="100">
                <article class="articulo">
                    <div style="display: flex; flex-direction: row; margin: 0.5rem 1rem; align-items: center;">
                        <h3 class="textoArticulo">InventoryApp</h3>
                        <span class="redirectIconWip" style="margin-left: auto;"><font-awesome-icon :icon="fas.faPersonDigging"/></span>
                    </div>
                    <div style="display: flex; flex-direction: row; margin: 0.5rem 1rem; align-items: center;">
                        <h3 class="subArticulo">{{ $t('inventoryAppDesc') }}</h3>
                    </div>
                    <a title="InventoryApp" href="https://bitbucket.org/arrudeboy/inventory/src" target="_blank" rel="noopener noreferrer">
                        <div class="git">
                            <div class="centrarFlex">
                                <svg style="fill: #586069; margin-right: 8px;" viewBox="0 0 16 16" version="1.1"
                                    width="16" height="16" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                                    </path>
                                </svg>
                                <span style="font-weight: 600; color: #0366d6;">
                                    <p>InventoryApp</p>
                                </span>
                            </div>
                            <div style="font-size: 12px; margin-bottom: 16px; margin-top: 8px; color: #586069;"></div>
                            <div style="font-size: 12px; color: #586069; display: flex; white-space: nowrap; overflow: hidden;">
                                <div style="; margin-right: 16px;">
                                    <span
                                        style="width: 12px; height: 12px; border-radius: 100%; background-color: #e34c26; display: inline-block; top: 1px; position: relative;"></span>
                                    <span>Html</span>
                                </div>
                                <div style="; margin-right: 16px;">
                                    <span
                                        style="width: 12px; height: 12px; border-radius: 100%; background-color: #563d7c; display: inline-block; top: 1px; position: relative;"></span>
                                    <span>Css</span>
                                </div>
                                <div style="; margin-right: 16px;">
                                    <span
                                        style="width: 12px; height: 12px; border-radius: 100%; background-color: #f1e05a; display: inline-block; top: 1px; position: relative;"></span>
                                    <span>JS</span>
                                </div>
                                <div style="; margin-right: 16px;">
                                    <span
                                        style="width: 12px; height: 12px; border-radius: 100%; background-color: #3572A5; display: inline-block; top: 1px; position: relative;"></span>
                                    <span>Python</span>
                                </div>
                                <div style="; margin-right: 16px;">
                                    <span
                                        style="width: 12px; height: 12px; border-radius: 100%; background-color: #3572A5; display: inline-block; top: 1px; position: relative;"></span>
                                    <span>Flask</span>
                                </div>
                                <div style="; margin-right: 16px;">
                                    <span>...</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
            </section>
            <section data-aos="zoom-in" data-aos-delay="200">
                <article class="articulo">
                        <div style="display: flex; flex-direction: row; margin: 0.5rem 1rem; align-items: center;">
                            <h3 class="textoArticulo">{{ $t('p5exercises') }}</h3>
                            <a :title="$t('p5exercises')" href="https://bbauti.github.io/ejerciciosp5/" target="_blank" rel="noopener noreferrer" style="margin-left: auto;">
                                <span class="redirectIcon"><font-awesome-icon :icon="fas.faUpRightFromSquare"/></span>
                            </a>
                        </div>
                        <div style="display: flex; flex-direction: row; margin: 0.5rem 1rem; align-items: center;">
                            <h3 class="subArticulo">{{ $t('p5exercisesDesc') }}</h3>
                        </div>
                        <a :title="$t('p5exercises')" href="https://github.com/bbauti/ejerciciosp5" target="_blank" rel="noopener noreferrer">
                            <div class="git">
                                <div class="centrarFlex">
                                        <svg style="fill: #586069; margin-right: 8px;" viewBox="0 0 16 16" version="1.1"
                                            width="16" height="16" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                                            </path>
                                        </svg>
                                        <span style="font-weight: 600; color: #0366d6;">
                                            <p>{{ $t('p5exercises') }}</p>
                                        </span>
                                </div>
                                <div style="font-size: 12px; margin-bottom: 16px; margin-top: 8px; color: #586069;"></div>
                                <div style="font-size: 12px; color: #586069; display: flex; white-space: nowrap; overflow: hidden;">
                                        <div style="; margin-right: 16px;">
                                            <span
                                                style="width: 12px; height: 12px; border-radius: 100%; background-color: #e34c26; display: inline-block; top: 1px; position: relative;"></span>
                                            <span>Html</span>
                                        </div>
                                        <div style="; margin-right: 16px;">
                                            <span
                                                style="width: 12px; height: 12px; border-radius: 100%; background-color: #563d7c; display: inline-block; top: 1px; position: relative;"></span>
                                            <span>Css</span>
                                        </div>
                                        <div style="; margin-right: 16px;">
                                            <span
                                                style="width: 12px; height: 12px; border-radius: 100%; background-color: #f1e05a; display: inline-block; top: 1px; position: relative;"></span>
                                            <span>JS</span>
                                        </div>
                                </div>
                            </div>
                        </a>
                </article>
            </section>
            <section data-aos="zoom-in" data-aos-delay="500">
                <article class="articulo">
                    <div style="display: flex; flex-direction: row; margin: 0.5rem 1rem; align-items: center;">
                        <h3 class="textoArticulo">Todo App</h3>
                        <a title="Todo App" href="https://bbauti.github.io/p5todoapp" target="_blank" rel="noopener noreferrer" style="margin-left: auto;">
                            <span class="redirectIcon"><font-awesome-icon :icon="fas.faUpRightFromSquare"/></span>
                        </a>
                        </div>
                    <div style="display: flex; flex-direction: row; margin: 0.5rem 1rem; align-items: center;">
                        <h3 class="subArticulo">{{ $t('todoAppDesc') }}</h3>
                    </div>
                    <a title="Todo App" href="https://github.com/bbauti/p5todoapp" target="_blank" rel="noopener noreferrer">
                        <div class="git">
                            <div class="centrarFlex">
                                    <svg style="fill: #586069; margin-right: 8px;" viewBox="0 0 16 16" version="1.1"
                                        width="16" height="16" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                                        </path>
                                    </svg>
                                    <span style="font-weight: 600; color: #0366d6;">
                                        <p>Todo App</p>
                                    </span>
                            </div>
                            <div style="font-size: 12px; margin-bottom: 16px; margin-top: 8px; color: #586069;"></div>
                            <div style="font-size: 12px; color: #586069; display: flex; white-space: nowrap; overflow: hidden;">
                                    <div style="; margin-right: 16px;">
                                        <span
                                            style="width: 12px; height: 12px; border-radius: 100%; background-color: #e34c26; display: inline-block; top: 1px; position: relative;"></span>
                                        <span>Html</span>
                                    </div>
                                    <div style="; margin-right: 16px;">
                                        <span
                                            style="width: 12px; height: 12px; border-radius: 100%; background-color: #563d7c; display: inline-block; top: 1px; position: relative;"></span>
                                        <span>Css</span>
                                    </div>
                                    <div style="; margin-right: 16px;">
                                        <span
                                            style="width: 12px; height: 12px; border-radius: 100%; background-color: #f1e05a; display: inline-block; top: 1px; position: relative;"></span>
                                        <span>JS</span>
                                    </div>
                            </div>
                        </div>
                    </a>
                </article>
            </section>
            <section data-aos="zoom-in" data-aos-delay="400">
                <article class="articulo">
                    <div style="display: flex; flex-direction: row; margin: 0.5rem 1rem; align-items: center;">
                        <h3 class="textoArticulo">Weather Channel</h3>
                        <a title="Weather Channel" href="https://bbauti.github.io/p5weatherChannel" target="_blank" rel="noopener noreferrer" style="margin-left: auto;">
                            <span class="redirectIcon"><font-awesome-icon :icon="fas.faUpRightFromSquare"/></span>
                        </a>
                    </div>
                    <div style="display: flex; flex-direction: row; margin: 0.5rem 1rem; align-items: center;">
                        <h3 class="subArticulo">{{ $t('weatherChannelDesc') }}</h3>
                    </div>
                    <a title="Weather Channel" href="https://github.com/bbauti/p5weatherChannel" target="_blank" rel="noopener noreferrer">
                        <div class="git">
                            <div class="centrarFlex">
                                    <svg style="fill: #586069; margin-right: 8px;" viewBox="0 0 16 16" version="1.1"
                                        width="16" height="16" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                                        </path>
                                    </svg>
                                    <span style="font-weight: 600; color: #0366d6;">
                                        <p>Weather Channel</p>
                                    </span>
                            </div>
                            <div style="font-size: 12px; margin-bottom: 16px; margin-top: 8px; color: #586069;"></div>
                            <div style="font-size: 12px; color: #586069; display: flex; white-space: nowrap; overflow: hidden;">
                                    <div style="; margin-right: 16px;">
                                        <span
                                            style="width: 12px; height: 12px; border-radius: 100%; background-color: #e34c26; display: inline-block; top: 1px; position: relative;"></span>
                                        <span>Html</span>
                                    </div>
                                    <div style="; margin-right: 16px;">
                                        <span
                                            style="width: 12px; height: 12px; border-radius: 100%; background-color: #563d7c; display: inline-block; top: 1px; position: relative;"></span>
                                        <span>Css</span>
                                    </div>
                                    <div style="; margin-right: 16px;">
                                        <span
                                            style="width: 12px; height: 12px; border-radius: 100%; background-color: #f1e05a; display: inline-block; top: 1px; position: relative;"></span>
                                        <span>JS</span>
                                    </div>
                            </div>
                        </div>
                    </a>
                </article>
            </section>
            <section data-aos="zoom-in" data-aos-delay="300">
                <article class="articulo">
                    <div style="display: flex; flex-direction: row; margin: 0.5rem 1rem; align-items: center;">
                        <h3 class="textoArticulo">Color Game</h3>
                        <a title="Color Game" href="https://bbauti.github.io/p5colorgame" target="_blank" rel="noopener noreferrer" style="margin-left: auto;">
                            <span class="redirectIcon"><font-awesome-icon :icon="fas.faUpRightFromSquare"/></span>
                        </a>
                    </div>
                    <div style="display: flex; flex-direction: row; margin: 0.5rem 1rem; align-items: center;">
                        <h3 class="subArticulo">{{ $t('colorGameDesc') }}</h3>
                    </div>
                    <a title="Color Game" href="https://github.com/bbauti/p5colorgame" target="_blank" rel="noopener noreferrer">
                        <div class="git">
                            <div class="centrarFlex">
                                    <svg style="fill: #586069; margin-right: 8px;" viewBox="0 0 16 16" version="1.1"
                                            width="16" height="16" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                                            </path>
                                    </svg>
                                    <span style="font-weight: 600; color: #0366d6;">
                                        <p>Color Game</p>
                                    </span>
                            </div>
                            <div style="font-size: 12px; margin-bottom: 16px; margin-top: 8px; color: #586069;"></div>
                            <div style="font-size: 12px; color: #586069; display: flex; white-space: nowrap; overflow: hidden;">
                                    <div style="; margin-right: 16px;">
                                        <span
                                            style="width: 12px; height: 12px; border-radius: 100%; background-color: #e34c26; display: inline-block; top: 1px; position: relative;"></span>
                                        <span>Html</span>
                                    </div>
                                    <div style="; margin-right: 16px;">
                                        <span
                                            style="width: 12px; height: 12px; border-radius: 100%; background-color: #563d7c; display: inline-block; top: 1px; position: relative;"></span>
                                        <span>Css</span>
                                    </div>
                                    <div style="; margin-right: 16px;">
                                        <span
                                            style="width: 12px; height: 12px; border-radius: 100%; background-color: #f1e05a; display: inline-block; top: 1px; position: relative;"></span>
                                        <span>JS</span>
                                    </div>
                            </div>
                        </div>
                    </a>
                </article>
            </section>
        </div>
    </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
export default {
  computed: {
    fas () {
       return fas // NOT RECOMMENDED
    },
  },
}
</script>
