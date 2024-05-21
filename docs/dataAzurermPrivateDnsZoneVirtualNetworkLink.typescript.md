# `dataAzurermPrivateDnsZoneVirtualNetworkLink` Submodule <a name="`dataAzurermPrivateDnsZoneVirtualNetworkLink` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsZoneVirtualNetworkLink <a name="DataAzurermPrivateDnsZoneVirtualNetworkLink" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/private_dns_zone_virtual_network_link azurerm_private_dns_zone_virtual_network_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

new dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink(scope: Construct, id: string, config: DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig">DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig">DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPrivateDnsZoneVirtualNetworkLink resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isConstruct"></a>

```typescript
import { dataAzurermPrivateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformElement"></a>

```typescript
import { dataAzurermPrivateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformDataSource"></a>

```typescript
import { dataAzurermPrivateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.generateConfigForImport"></a>

```typescript
import { dataAzurermPrivateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermPrivateDnsZoneVirtualNetworkLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPrivateDnsZoneVirtualNetworkLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPrivateDnsZoneVirtualNetworkLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/private_dns_zone_virtual_network_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateDnsZoneVirtualNetworkLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.registrationEnabled">registrationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneNameInput">privateDnsZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneName">privateDnsZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `registrationEnabled`<sup>Required</sup> <a name="registrationEnabled" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.registrationEnabled"></a>

```typescript
public readonly registrationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference</a>

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateDnsZoneNameInput`<sup>Optional</sup> <a name="privateDnsZoneNameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneNameInput"></a>

```typescript
public readonly privateDnsZoneNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateDnsZoneName`<sup>Required</sup> <a name="privateDnsZoneName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneName"></a>

```typescript
public readonly privateDnsZoneName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig <a name="DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

const dataAzurermPrivateDnsZoneVirtualNetworkLinkConfig: dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/private_dns_zone_virtual_network_link#name DataAzurermPrivateDnsZoneVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.privateDnsZoneName">privateDnsZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/private_dns_zone_virtual_network_link#private_dns_zone_name DataAzurermPrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/private_dns_zone_virtual_network_link#resource_group_name DataAzurermPrivateDnsZoneVirtualNetworkLink#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/private_dns_zone_virtual_network_link#id DataAzurermPrivateDnsZoneVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/private_dns_zone_virtual_network_link#name DataAzurermPrivateDnsZoneVirtualNetworkLink#name}.

---

##### `privateDnsZoneName`<sup>Required</sup> <a name="privateDnsZoneName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.privateDnsZoneName"></a>

```typescript
public readonly privateDnsZoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/private_dns_zone_virtual_network_link#private_dns_zone_name DataAzurermPrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/private_dns_zone_virtual_network_link#resource_group_name DataAzurermPrivateDnsZoneVirtualNetworkLink#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/private_dns_zone_virtual_network_link#id DataAzurermPrivateDnsZoneVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/private_dns_zone_virtual_network_link#timeouts DataAzurermPrivateDnsZoneVirtualNetworkLink#timeouts}

---

### DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts <a name="DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

const dataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts: dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/private_dns_zone_virtual_network_link#read DataAzurermPrivateDnsZoneVirtualNetworkLink#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/private_dns_zone_virtual_network_link#read DataAzurermPrivateDnsZoneVirtualNetworkLink#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference <a name="DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

new dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---



