# `dataAzurermNetworkManagerConnectivityConfiguration` Submodule <a name="`dataAzurermNetworkManagerConnectivityConfiguration` Submodule" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetworkManagerConnectivityConfiguration <a name="DataAzurermNetworkManagerConnectivityConfiguration" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/network_manager_connectivity_configuration azurerm_network_manager_connectivity_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer"></a>

```typescript
import { dataAzurermNetworkManagerConnectivityConfiguration } from '@cdktf/provider-azurerm'

new dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration(scope: Construct, id: string, config: DataAzurermNetworkManagerConnectivityConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig">DataAzurermNetworkManagerConnectivityConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig">DataAzurermNetworkManagerConnectivityConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermNetworkManagerConnectivityConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermNetworkManagerConnectivityConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isConstruct"></a>

```typescript
import { dataAzurermNetworkManagerConnectivityConfiguration } from '@cdktf/provider-azurerm'

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformElement"></a>

```typescript
import { dataAzurermNetworkManagerConnectivityConfiguration } from '@cdktf/provider-azurerm'

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAzurermNetworkManagerConnectivityConfiguration } from '@cdktf/provider-azurerm'

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport"></a>

```typescript
import { dataAzurermNetworkManagerConnectivityConfiguration } from '@cdktf/provider-azurerm'

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermNetworkManagerConnectivityConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermNetworkManagerConnectivityConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermNetworkManagerConnectivityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/network_manager_connectivity_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermNetworkManagerConnectivityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.appliesToGroup">appliesToGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList">DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.connectivityTopology">connectivityTopology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabled">deleteExistingPeeringEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.globalMeshEnabled">globalMeshEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.hub">hub</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList">DataAzurermNetworkManagerConnectivityConfigurationHubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference">DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.networkManagerIdInput">networkManagerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.networkManagerId">networkManagerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `appliesToGroup`<sup>Required</sup> <a name="appliesToGroup" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.appliesToGroup"></a>

```typescript
public readonly appliesToGroup: DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList">DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList</a>

---

##### `connectivityTopology`<sup>Required</sup> <a name="connectivityTopology" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.connectivityTopology"></a>

```typescript
public readonly connectivityTopology: string;
```

- *Type:* string

---

##### `deleteExistingPeeringEnabled`<sup>Required</sup> <a name="deleteExistingPeeringEnabled" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabled"></a>

```typescript
public readonly deleteExistingPeeringEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `globalMeshEnabled`<sup>Required</sup> <a name="globalMeshEnabled" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.globalMeshEnabled"></a>

```typescript
public readonly globalMeshEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.hub"></a>

```typescript
public readonly hub: DataAzurermNetworkManagerConnectivityConfigurationHubList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList">DataAzurermNetworkManagerConnectivityConfigurationHubList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference">DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkManagerIdInput`<sup>Optional</sup> <a name="networkManagerIdInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.networkManagerIdInput"></a>

```typescript
public readonly networkManagerIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermNetworkManagerConnectivityConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkManagerId`<sup>Required</sup> <a name="networkManagerId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.networkManagerId"></a>

```typescript
public readonly networkManagerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup <a name="DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup.Initializer"></a>

```typescript
import { dataAzurermNetworkManagerConnectivityConfiguration } from '@cdktf/provider-azurerm'

const dataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup: dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup = { ... }
```


### DataAzurermNetworkManagerConnectivityConfigurationConfig <a name="DataAzurermNetworkManagerConnectivityConfigurationConfig" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.Initializer"></a>

```typescript
import { dataAzurermNetworkManagerConnectivityConfiguration } from '@cdktf/provider-azurerm'

const dataAzurermNetworkManagerConnectivityConfigurationConfig: dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/network_manager_connectivity_configuration#name DataAzurermNetworkManagerConnectivityConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.networkManagerId">networkManagerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/network_manager_connectivity_configuration#network_manager_id DataAzurermNetworkManagerConnectivityConfiguration#network_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/network_manager_connectivity_configuration#id DataAzurermNetworkManagerConnectivityConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/network_manager_connectivity_configuration#name DataAzurermNetworkManagerConnectivityConfiguration#name}.

---

##### `networkManagerId`<sup>Required</sup> <a name="networkManagerId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.networkManagerId"></a>

```typescript
public readonly networkManagerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/network_manager_connectivity_configuration#network_manager_id DataAzurermNetworkManagerConnectivityConfiguration#network_manager_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/network_manager_connectivity_configuration#id DataAzurermNetworkManagerConnectivityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermNetworkManagerConnectivityConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/network_manager_connectivity_configuration#timeouts DataAzurermNetworkManagerConnectivityConfiguration#timeouts}

---

### DataAzurermNetworkManagerConnectivityConfigurationHub <a name="DataAzurermNetworkManagerConnectivityConfigurationHub" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub.Initializer"></a>

```typescript
import { dataAzurermNetworkManagerConnectivityConfiguration } from '@cdktf/provider-azurerm'

const dataAzurermNetworkManagerConnectivityConfigurationHub: dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub = { ... }
```


### DataAzurermNetworkManagerConnectivityConfigurationTimeouts <a name="DataAzurermNetworkManagerConnectivityConfigurationTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts.Initializer"></a>

```typescript
import { dataAzurermNetworkManagerConnectivityConfiguration } from '@cdktf/provider-azurerm'

const dataAzurermNetworkManagerConnectivityConfigurationTimeouts: dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/network_manager_connectivity_configuration#read DataAzurermNetworkManagerConnectivityConfiguration#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/network_manager_connectivity_configuration#read DataAzurermNetworkManagerConnectivityConfiguration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList <a name="DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer"></a>

```typescript
import { dataAzurermNetworkManagerConnectivityConfiguration } from '@cdktf/provider-azurerm'

new dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.get"></a>

```typescript
public get(index: number): DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference <a name="DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer"></a>

```typescript
import { dataAzurermNetworkManagerConnectivityConfiguration } from '@cdktf/provider-azurerm'

new dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabled">globalMeshEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivity">groupConnectivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupId">networkGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGateway">useHubGateway</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup">DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `globalMeshEnabled`<sup>Required</sup> <a name="globalMeshEnabled" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabled"></a>

```typescript
public readonly globalMeshEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `groupConnectivity`<sup>Required</sup> <a name="groupConnectivity" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivity"></a>

```typescript
public readonly groupConnectivity: string;
```

- *Type:* string

---

##### `networkGroupId`<sup>Required</sup> <a name="networkGroupId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupId"></a>

```typescript
public readonly networkGroupId: string;
```

- *Type:* string

---

##### `useHubGateway`<sup>Required</sup> <a name="useHubGateway" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGateway"></a>

```typescript
public readonly useHubGateway: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup">DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup</a>

---


### DataAzurermNetworkManagerConnectivityConfigurationHubList <a name="DataAzurermNetworkManagerConnectivityConfigurationHubList" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer"></a>

```typescript
import { dataAzurermNetworkManagerConnectivityConfiguration } from '@cdktf/provider-azurerm'

new dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.get"></a>

```typescript
public get(index: number): DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference <a name="DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer"></a>

```typescript
import { dataAzurermNetworkManagerConnectivityConfiguration } from '@cdktf/provider-azurerm'

new dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub">DataAzurermNetworkManagerConnectivityConfigurationHub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNetworkManagerConnectivityConfigurationHub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub">DataAzurermNetworkManagerConnectivityConfigurationHub</a>

---


### DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference <a name="DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermNetworkManagerConnectivityConfiguration } from '@cdktf/provider-azurerm'

new dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermNetworkManagerConnectivityConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a>

---



