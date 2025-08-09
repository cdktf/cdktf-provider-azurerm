# `dataAzurermPrivateDnsResolverOutboundEndpoint` Submodule <a name="`dataAzurermPrivateDnsResolverOutboundEndpoint` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsResolverOutboundEndpoint <a name="DataAzurermPrivateDnsResolverOutboundEndpoint" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/private_dns_resolver_outbound_endpoint azurerm_private_dns_resolver_outbound_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

new dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint(scope: Construct, id: string, config: DataAzurermPrivateDnsResolverOutboundEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig">DataAzurermPrivateDnsResolverOutboundEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig">DataAzurermPrivateDnsResolverOutboundEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermPrivateDnsResolverOutboundEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts">DataAzurermPrivateDnsResolverOutboundEndpointTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPrivateDnsResolverOutboundEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isConstruct"></a>

```typescript
import { dataAzurermPrivateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isTerraformElement"></a>

```typescript
import { dataAzurermPrivateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAzurermPrivateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.generateConfigForImport"></a>

```typescript
import { dataAzurermPrivateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermPrivateDnsResolverOutboundEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPrivateDnsResolverOutboundEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPrivateDnsResolverOutboundEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/private_dns_resolver_outbound_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateDnsResolverOutboundEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference">DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.privateDnsResolverIdInput">privateDnsResolverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts">DataAzurermPrivateDnsResolverOutboundEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.privateDnsResolverId">privateDnsResolverId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference">DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateDnsResolverIdInput`<sup>Optional</sup> <a name="privateDnsResolverIdInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.privateDnsResolverIdInput"></a>

```typescript
public readonly privateDnsResolverIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermPrivateDnsResolverOutboundEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts">DataAzurermPrivateDnsResolverOutboundEndpointTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateDnsResolverId`<sup>Required</sup> <a name="privateDnsResolverId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.privateDnsResolverId"></a>

```typescript
public readonly privateDnsResolverId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsResolverOutboundEndpointConfig <a name="DataAzurermPrivateDnsResolverOutboundEndpointConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

const dataAzurermPrivateDnsResolverOutboundEndpointConfig: dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/private_dns_resolver_outbound_endpoint#name DataAzurermPrivateDnsResolverOutboundEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.privateDnsResolverId">privateDnsResolverId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/private_dns_resolver_outbound_endpoint#private_dns_resolver_id DataAzurermPrivateDnsResolverOutboundEndpoint#private_dns_resolver_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/private_dns_resolver_outbound_endpoint#id DataAzurermPrivateDnsResolverOutboundEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts">DataAzurermPrivateDnsResolverOutboundEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/private_dns_resolver_outbound_endpoint#name DataAzurermPrivateDnsResolverOutboundEndpoint#name}.

---

##### `privateDnsResolverId`<sup>Required</sup> <a name="privateDnsResolverId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.privateDnsResolverId"></a>

```typescript
public readonly privateDnsResolverId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/private_dns_resolver_outbound_endpoint#private_dns_resolver_id DataAzurermPrivateDnsResolverOutboundEndpoint#private_dns_resolver_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/private_dns_resolver_outbound_endpoint#id DataAzurermPrivateDnsResolverOutboundEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPrivateDnsResolverOutboundEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts">DataAzurermPrivateDnsResolverOutboundEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/private_dns_resolver_outbound_endpoint#timeouts DataAzurermPrivateDnsResolverOutboundEndpoint#timeouts}

---

### DataAzurermPrivateDnsResolverOutboundEndpointTimeouts <a name="DataAzurermPrivateDnsResolverOutboundEndpointTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

const dataAzurermPrivateDnsResolverOutboundEndpointTimeouts: dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/private_dns_resolver_outbound_endpoint#read DataAzurermPrivateDnsResolverOutboundEndpoint#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/private_dns_resolver_outbound_endpoint#read DataAzurermPrivateDnsResolverOutboundEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference <a name="DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

new dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts">DataAzurermPrivateDnsResolverOutboundEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermPrivateDnsResolverOutboundEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts">DataAzurermPrivateDnsResolverOutboundEndpointTimeouts</a>

---



