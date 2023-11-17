
# Terraform CDK azurerm Provider tracks ~> 3.10

This repo builds and publishes the Terraform azurerm Provider bindings for [CDK for Terraform](https://cdk.tf).

Is based directly on azurerm 3.81.0

## Available Packages

### NPM

The npm package is available at [https://www.npmjs.com/package/@cdktf/provider-azurerm](https://www.npmjs.com/package/@cdktf/provider-azurerm).

`npm install @cdktf/provider-azurerm`

### PyPI

The PyPI package is available at [https://pypi.org/project/cdktf-cdktf-provider-azurerm](https://pypi.org/project/cdktf-cdktf-provider-azurerm).

`pipenv install cdktf-cdktf-provider-azurerm`

### Nuget

The Nuget package is available at [https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Azurerm](https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Azurerm).

`dotnet add package HashiCorp.Cdktf.Providers.Azurerm`

### Maven

The Maven package is available at [https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-azurerm](https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-azurerm).

```
<dependency>
    <groupId>com.hashicorp</groupId>
    <artifactId>cdktf-provider-azurerm</artifactId>
    <version>[REPLACE WITH DESIRED VERSION]</version>
</dependency>
```


### Go

The go package is generated into the [`github.com/cdktf/cdktf-provider-azurerm-go`](https://github.com/cdktf/cdktf-provider-azurerm-go) package.

`go get github.com/cdktf/cdktf-provider-azurerm-go/azurerm`

## Docs

Find auto-generated docs for this provider here: 

- [Typescript](./docs/API.typescript.md)
- [Python](./docs/API.python.md)
- [Java](./docs/API.java.md)
- [C#](./docs/API.csharp.md)
- [Go](./docs/API.go.md)

You can also visit a hosted version of the documentation on [constructs.dev](https://constructs.dev/packages/@cdktf/provider-azurerm).

## Versioning

This project is explicitly not tracking the Terraform azurerm Provider version 1:1. In fact, it always tracks `latest` of `~> 3.10` with every release. If there are scenarios where you explicitly have to pin your provider version, you can do so by generating the [provider constructs manually](https://cdk.tf/imports).

These are the upstream dependencies:

- [Terraform CDK](https://cdk.tf)
- [Terraform azurerm Provider](https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0)
    - This links to the minimum version being tracked, you can find the latest released version [in our releases](https://github.com/cdktf/cdktf-provider-azurerm/releases)
- [Terraform Engine](https://terraform.io)

If there are breaking changes (backward incompatible) in any of the above, the major version of this project will be bumped.

## Features / Issues / Bugs

Please report bugs and issues to the [terraform cdk](https://cdk.tf) project:

- [Create bug report](https://cdk.tf/bug)
- [Create feature request](https://cdk.tf/feature)

## Contributing

### projen

This is mostly based on [projen](https://github.com/eladb/projen), which takes care of generating the entire repository.

### cdktf-provider-project based on projen

There's a custom [project builder](https://github.com/hashicorp/cdktf-provider-project) which encapsulate the common settings for all `cdktf` providers.

### Provider Version

The provider version can be adjusted in [./.projenrc.js](./.projenrc.js).

### Repository Management

The repository is managed by [Repository Manager](https://github.com/hashicorp/cdktf-repository-manager/)
