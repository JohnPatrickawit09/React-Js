import React, { Component } from 'react'

export class Content extends Component {
  render() {
    return (
        <main className="flex-1 bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold mb-4">Content</h2>
            <p>This is the main content area of the application.</p>
        </main>
    )
  }
}

export default Content