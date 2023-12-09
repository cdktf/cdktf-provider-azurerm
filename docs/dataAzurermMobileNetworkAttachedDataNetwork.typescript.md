# `dataAzurermMobileNetworkAttachedDataNetwork` Submodule <a name="`dataAzurermMobileNetworkAttachedDataNetwork` Submodule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMobileNetworkAttachedDataNetwork <a name="DataAzurermMobileNetworkAttachedDataNetwork" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/mobile_network_attached_data_network azurerm_mobile_network_attached_data_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork(scope: Construct, id: string, config: DataAzurermMobileNetworkAttachedDataNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig">DataAzurermMobileNetworkAttachedDataNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig">DataAzurermMobileNetworkAttachedDataNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMobileNetworkAttachedDataNetworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMobileNetworkAttachedDataNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isConstruct"></a>

```typescript
import { dataAzurermMobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformElement"></a>

```typescript
import { dataAzurermMobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformDataSource"></a>

```typescript
import { dataAzurermMobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.generateConfigForImport"></a>

```typescript
import { dataAzurermMobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermMobileNetworkAttachedDataNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMobileNetworkAttachedDataNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMobileNetworkAttachedDataNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/mobile_network_attached_data_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMobileNetworkAttachedDataNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.dnsAddresses">dnsAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.networkAddressPortTranslation">networkAddressPortTranslation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference">DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixes">userEquipmentAddressPoolPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixes">userEquipmentStaticAddressPoolPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Address">userPlaneAccessIpv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Gateway">userPlaneAccessIpv4Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Subnet">userPlaneAccessIpv4Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessName">userPlaneAccessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkNameInput">mobileNetworkDataNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneIdInput">mobileNetworkPacketCoreDataPlaneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkName">mobileNetworkDataNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneId">mobileNetworkPacketCoreDataPlaneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dnsAddresses`<sup>Required</sup> <a name="dnsAddresses" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.dnsAddresses"></a>

```typescript
public readonly dnsAddresses: string[];
```

- *Type:* string[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `networkAddressPortTranslation`<sup>Required</sup> <a name="networkAddressPortTranslation" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.networkAddressPortTranslation"></a>

```typescript
public readonly networkAddressPortTranslation: DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference">DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference</a>

---

##### `userEquipmentAddressPoolPrefixes`<sup>Required</sup> <a name="userEquipmentAddressPoolPrefixes" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixes"></a>

```typescript
public readonly userEquipmentAddressPoolPrefixes: string[];
```

- *Type:* string[]

---

##### `userEquipmentStaticAddressPoolPrefixes`<sup>Required</sup> <a name="userEquipmentStaticAddressPoolPrefixes" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixes"></a>

```typescript
public readonly userEquipmentStaticAddressPoolPrefixes: string[];
```

- *Type:* string[]

---

##### `userPlaneAccessIpv4Address`<sup>Required</sup> <a name="userPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Address"></a>

```typescript
public readonly userPlaneAccessIpv4Address: string;
```

- *Type:* string

---

##### `userPlaneAccessIpv4Gateway`<sup>Required</sup> <a name="userPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Gateway"></a>

```typescript
public readonly userPlaneAccessIpv4Gateway: string;
```

- *Type:* string

---

##### `userPlaneAccessIpv4Subnet`<sup>Required</sup> <a name="userPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Subnet"></a>

```typescript
public readonly userPlaneAccessIpv4Subnet: string;
```

- *Type:* string

---

##### `userPlaneAccessName`<sup>Required</sup> <a name="userPlaneAccessName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessName"></a>

```typescript
public readonly userPlaneAccessName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mobileNetworkDataNetworkNameInput`<sup>Optional</sup> <a name="mobileNetworkDataNetworkNameInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkNameInput"></a>

```typescript
public readonly mobileNetworkDataNetworkNameInput: string;
```

- *Type:* string

---

##### `mobileNetworkPacketCoreDataPlaneIdInput`<sup>Optional</sup> <a name="mobileNetworkPacketCoreDataPlaneIdInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneIdInput"></a>

```typescript
public readonly mobileNetworkPacketCoreDataPlaneIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermMobileNetworkAttachedDataNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mobileNetworkDataNetworkName`<sup>Required</sup> <a name="mobileNetworkDataNetworkName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkName"></a>

```typescript
public readonly mobileNetworkDataNetworkName: string;
```

- *Type:* string

---

##### `mobileNetworkPacketCoreDataPlaneId`<sup>Required</sup> <a name="mobileNetworkPacketCoreDataPlaneId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneId"></a>

```typescript
public readonly mobileNetworkPacketCoreDataPlaneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMobileNetworkAttachedDataNetworkConfig <a name="DataAzurermMobileNetworkAttachedDataNetworkConfig" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkAttachedDataNetworkConfig: dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.mobileNetworkDataNetworkName">mobileNetworkDataNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_data_network_name DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_data_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.mobileNetworkPacketCoreDataPlaneId">mobileNetworkPacketCoreDataPlaneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/mobile_network_attached_data_network#id DataAzurermMobileNetworkAttachedDataNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mobileNetworkDataNetworkName`<sup>Required</sup> <a name="mobileNetworkDataNetworkName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.mobileNetworkDataNetworkName"></a>

```typescript
public readonly mobileNetworkDataNetworkName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_data_network_name DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_data_network_name}.

---

##### `mobileNetworkPacketCoreDataPlaneId`<sup>Required</sup> <a name="mobileNetworkPacketCoreDataPlaneId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.mobileNetworkPacketCoreDataPlaneId"></a>

```typescript
public readonly mobileNetworkPacketCoreDataPlaneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/mobile_network_attached_data_network#id DataAzurermMobileNetworkAttachedDataNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMobileNetworkAttachedDataNetworkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/mobile_network_attached_data_network#timeouts DataAzurermMobileNetworkAttachedDataNetwork#timeouts}

---

### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation: dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation = { ... }
```


### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange: dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange = { ... }
```


### DataAzurermMobileNetworkAttachedDataNetworkTimeouts <a name="DataAzurermMobileNetworkAttachedDataNetworkTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkAttachedDataNetworkTimeouts: dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/mobile_network_attached_data_network#read DataAzurermMobileNetworkAttachedDataNetwork#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/mobile_network_attached_data_network#read DataAzurermMobileNetworkAttachedDataNetwork#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.get"></a>

```typescript
public get(index: number): DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSeconds">icmpPinholeTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumber">pinholeMaximumNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRange">portRange</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSeconds">tcpPinholeTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSeconds">tcpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSeconds">udpPinholeTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSeconds">udpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icmpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="icmpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSeconds"></a>

```typescript
public readonly icmpPinholeTimeoutInSeconds: number;
```

- *Type:* number

---

##### `pinholeMaximumNumber`<sup>Required</sup> <a name="pinholeMaximumNumber" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumber"></a>

```typescript
public readonly pinholeMaximumNumber: number;
```

- *Type:* number

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRange"></a>

```typescript
public readonly portRange: DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList</a>

---

##### `tcpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="tcpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSeconds"></a>

```typescript
public readonly tcpPinholeTimeoutInSeconds: number;
```

- *Type:* number

---

##### `tcpPortReuseMinimumHoldTimeInSeconds`<sup>Required</sup> <a name="tcpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSeconds"></a>

```typescript
public readonly tcpPortReuseMinimumHoldTimeInSeconds: number;
```

- *Type:* number

---

##### `udpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="udpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSeconds"></a>

```typescript
public readonly udpPinholeTimeoutInSeconds: number;
```

- *Type:* number

---

##### `udpPortReuseMinimumHoldTimeInSeconds`<sup>Required</sup> <a name="udpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSeconds"></a>

```typescript
public readonly udpPortReuseMinimumHoldTimeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

---


### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.get"></a>

```typescript
public get(index: number): DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

---


### DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference <a name="DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermMobileNetworkAttachedDataNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a>

---



