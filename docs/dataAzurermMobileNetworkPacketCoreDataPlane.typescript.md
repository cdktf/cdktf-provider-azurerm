# `dataAzurermMobileNetworkPacketCoreDataPlane` Submodule <a name="`dataAzurermMobileNetworkPacketCoreDataPlane` Submodule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMobileNetworkPacketCoreDataPlane <a name="DataAzurermMobileNetworkPacketCoreDataPlane" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_packet_core_data_plane azurerm_mobile_network_packet_core_data_plane}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane(scope: Construct, id: string, config: DataAzurermMobileNetworkPacketCoreDataPlaneConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig">DataAzurermMobileNetworkPacketCoreDataPlaneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig">DataAzurermMobileNetworkPacketCoreDataPlaneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMobileNetworkPacketCoreDataPlane resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isConstruct"></a>

```typescript
import { dataAzurermMobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformElement"></a>

```typescript
import { dataAzurermMobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformDataSource"></a>

```typescript
import { dataAzurermMobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport"></a>

```typescript
import { dataAzurermMobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermMobileNetworkPacketCoreDataPlane resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMobileNetworkPacketCoreDataPlane to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMobileNetworkPacketCoreDataPlane that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_packet_core_data_plane#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMobileNetworkPacketCoreDataPlane to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference">DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Address">userPlaneAccessIpv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Gateway">userPlaneAccessIpv4Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Subnet">userPlaneAccessIpv4Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessName">userPlaneAccessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneIdInput">mobileNetworkPacketCoreControlPlaneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneId">mobileNetworkPacketCoreControlPlaneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference">DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference</a>

---

##### `userPlaneAccessIpv4Address`<sup>Required</sup> <a name="userPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Address"></a>

```typescript
public readonly userPlaneAccessIpv4Address: string;
```

- *Type:* string

---

##### `userPlaneAccessIpv4Gateway`<sup>Required</sup> <a name="userPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Gateway"></a>

```typescript
public readonly userPlaneAccessIpv4Gateway: string;
```

- *Type:* string

---

##### `userPlaneAccessIpv4Subnet`<sup>Required</sup> <a name="userPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Subnet"></a>

```typescript
public readonly userPlaneAccessIpv4Subnet: string;
```

- *Type:* string

---

##### `userPlaneAccessName`<sup>Required</sup> <a name="userPlaneAccessName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessName"></a>

```typescript
public readonly userPlaneAccessName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mobileNetworkPacketCoreControlPlaneIdInput`<sup>Optional</sup> <a name="mobileNetworkPacketCoreControlPlaneIdInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneIdInput"></a>

```typescript
public readonly mobileNetworkPacketCoreControlPlaneIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mobileNetworkPacketCoreControlPlaneId`<sup>Required</sup> <a name="mobileNetworkPacketCoreControlPlaneId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneId"></a>

```typescript
public readonly mobileNetworkPacketCoreControlPlaneId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMobileNetworkPacketCoreDataPlaneConfig <a name="DataAzurermMobileNetworkPacketCoreDataPlaneConfig" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkPacketCoreDataPlaneConfig: dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.mobileNetworkPacketCoreControlPlaneId">mobileNetworkPacketCoreControlPlaneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id DataAzurermMobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_packet_core_data_plane#name DataAzurermMobileNetworkPacketCoreDataPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_packet_core_data_plane#id DataAzurermMobileNetworkPacketCoreDataPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mobileNetworkPacketCoreControlPlaneId`<sup>Required</sup> <a name="mobileNetworkPacketCoreControlPlaneId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.mobileNetworkPacketCoreControlPlaneId"></a>

```typescript
public readonly mobileNetworkPacketCoreControlPlaneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id DataAzurermMobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_packet_core_data_plane#name DataAzurermMobileNetworkPacketCoreDataPlane#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_packet_core_data_plane#id DataAzurermMobileNetworkPacketCoreDataPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_packet_core_data_plane#timeouts DataAzurermMobileNetworkPacketCoreDataPlane#timeouts}

---

### DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts <a name="DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkPacketCoreDataPlaneTimeouts: dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_packet_core_data_plane#read DataAzurermMobileNetworkPacketCoreDataPlane#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_packet_core_data_plane#read DataAzurermMobileNetworkPacketCoreDataPlane#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference <a name="DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a>

---



