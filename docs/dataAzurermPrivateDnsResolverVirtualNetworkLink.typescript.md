# `dataAzurermPrivateDnsResolverVirtualNetworkLink` Submodule <a name="`dataAzurermPrivateDnsResolverVirtualNetworkLink` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsResolverVirtualNetworkLink <a name="DataAzurermPrivateDnsResolverVirtualNetworkLink" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/data-sources/private_dns_resolver_virtual_network_link azurerm_private_dns_resolver_virtual_network_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsResolverVirtualNetworkLink } from '@cdktf/provider-azurerm'

new dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink(scope: Construct, id: string, config: DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig">DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig">DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPrivateDnsResolverVirtualNetworkLink resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isConstruct"></a>

```typescript
import { dataAzurermPrivateDnsResolverVirtualNetworkLink } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isTerraformElement"></a>

```typescript
import { dataAzurermPrivateDnsResolverVirtualNetworkLink } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isTerraformDataSource"></a>

```typescript
import { dataAzurermPrivateDnsResolverVirtualNetworkLink } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.generateConfigForImport"></a>

```typescript
import { dataAzurermPrivateDnsResolverVirtualNetworkLink } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermPrivateDnsResolverVirtualNetworkLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPrivateDnsResolverVirtualNetworkLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPrivateDnsResolverVirtualNetworkLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/data-sources/private_dns_resolver_virtual_network_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateDnsResolverVirtualNetworkLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetIdInput">dnsForwardingRulesetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetId">dnsForwardingRulesetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference</a>

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `dnsForwardingRulesetIdInput`<sup>Optional</sup> <a name="dnsForwardingRulesetIdInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetIdInput"></a>

```typescript
public readonly dnsForwardingRulesetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a>

---

##### `dnsForwardingRulesetId`<sup>Required</sup> <a name="dnsForwardingRulesetId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetId"></a>

```typescript
public readonly dnsForwardingRulesetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig <a name="DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsResolverVirtualNetworkLink } from '@cdktf/provider-azurerm'

const dataAzurermPrivateDnsResolverVirtualNetworkLinkConfig: dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.dnsForwardingRulesetId">dnsForwardingRulesetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/data-sources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id DataAzurermPrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/data-sources/private_dns_resolver_virtual_network_link#name DataAzurermPrivateDnsResolverVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/data-sources/private_dns_resolver_virtual_network_link#id DataAzurermPrivateDnsResolverVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dnsForwardingRulesetId`<sup>Required</sup> <a name="dnsForwardingRulesetId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.dnsForwardingRulesetId"></a>

```typescript
public readonly dnsForwardingRulesetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/data-sources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id DataAzurermPrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/data-sources/private_dns_resolver_virtual_network_link#name DataAzurermPrivateDnsResolverVirtualNetworkLink#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/data-sources/private_dns_resolver_virtual_network_link#id DataAzurermPrivateDnsResolverVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/data-sources/private_dns_resolver_virtual_network_link#timeouts DataAzurermPrivateDnsResolverVirtualNetworkLink#timeouts}

---

### DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts <a name="DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsResolverVirtualNetworkLink } from '@cdktf/provider-azurerm'

const dataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts: dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/data-sources/private_dns_resolver_virtual_network_link#read DataAzurermPrivateDnsResolverVirtualNetworkLink#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/data-sources/private_dns_resolver_virtual_network_link#read DataAzurermPrivateDnsResolverVirtualNetworkLink#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference <a name="DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsResolverVirtualNetworkLink } from '@cdktf/provider-azurerm'

new dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a>

---



