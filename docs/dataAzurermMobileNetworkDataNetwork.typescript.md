# `dataAzurermMobileNetworkDataNetwork` Submodule <a name="`dataAzurermMobileNetworkDataNetwork` Submodule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMobileNetworkDataNetwork <a name="DataAzurermMobileNetworkDataNetwork" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/mobile_network_data_network azurerm_mobile_network_data_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkDataNetwork } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork(scope: Construct, id: string, config: DataAzurermMobileNetworkDataNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig">DataAzurermMobileNetworkDataNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig">DataAzurermMobileNetworkDataNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMobileNetworkDataNetworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeouts">DataAzurermMobileNetworkDataNetworkTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMobileNetworkDataNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.isConstruct"></a>

```typescript
import { dataAzurermMobileNetworkDataNetwork } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.isTerraformElement"></a>

```typescript
import { dataAzurermMobileNetworkDataNetwork } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.isTerraformDataSource"></a>

```typescript
import { dataAzurermMobileNetworkDataNetwork } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.generateConfigForImport"></a>

```typescript
import { dataAzurermMobileNetworkDataNetwork } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermMobileNetworkDataNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMobileNetworkDataNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMobileNetworkDataNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/mobile_network_data_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMobileNetworkDataNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference">DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.mobileNetworkIdInput">mobileNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeouts">DataAzurermMobileNetworkDataNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.mobileNetworkId">mobileNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference">DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mobileNetworkIdInput`<sup>Optional</sup> <a name="mobileNetworkIdInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.mobileNetworkIdInput"></a>

```typescript
public readonly mobileNetworkIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermMobileNetworkDataNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeouts">DataAzurermMobileNetworkDataNetworkTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mobileNetworkId`<sup>Required</sup> <a name="mobileNetworkId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.mobileNetworkId"></a>

```typescript
public readonly mobileNetworkId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMobileNetworkDataNetworkConfig <a name="DataAzurermMobileNetworkDataNetworkConfig" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkDataNetwork } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkDataNetworkConfig: dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.mobileNetworkId">mobileNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/mobile_network_data_network#mobile_network_id DataAzurermMobileNetworkDataNetwork#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/mobile_network_data_network#name DataAzurermMobileNetworkDataNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/mobile_network_data_network#id DataAzurermMobileNetworkDataNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeouts">DataAzurermMobileNetworkDataNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mobileNetworkId`<sup>Required</sup> <a name="mobileNetworkId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.mobileNetworkId"></a>

```typescript
public readonly mobileNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/mobile_network_data_network#mobile_network_id DataAzurermMobileNetworkDataNetwork#mobile_network_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/mobile_network_data_network#name DataAzurermMobileNetworkDataNetwork#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/mobile_network_data_network#id DataAzurermMobileNetworkDataNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMobileNetworkDataNetworkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeouts">DataAzurermMobileNetworkDataNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/mobile_network_data_network#timeouts DataAzurermMobileNetworkDataNetwork#timeouts}

---

### DataAzurermMobileNetworkDataNetworkTimeouts <a name="DataAzurermMobileNetworkDataNetworkTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeouts.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkDataNetwork } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkDataNetworkTimeouts: dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/mobile_network_data_network#read DataAzurermMobileNetworkDataNetwork#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/mobile_network_data_network#read DataAzurermMobileNetworkDataNetwork#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference <a name="DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkDataNetwork } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeouts">DataAzurermMobileNetworkDataNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermMobileNetworkDataNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkDataNetwork.DataAzurermMobileNetworkDataNetworkTimeouts">DataAzurermMobileNetworkDataNetworkTimeouts</a>

---



