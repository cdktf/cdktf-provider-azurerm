# `dataAzurermAppServiceEnvironmentV3` Submodule <a name="`dataAzurermAppServiceEnvironmentV3` Submodule" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAppServiceEnvironmentV3 <a name="DataAzurermAppServiceEnvironmentV3" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/app_service_environment_v3 azurerm_app_service_environment_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer"></a>

```typescript
import { dataAzurermAppServiceEnvironmentV3 } from '@cdktf/provider-azurerm'

new dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3(scope: Construct, id: string, config: DataAzurermAppServiceEnvironmentV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config">DataAzurermAppServiceEnvironmentV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config">DataAzurermAppServiceEnvironmentV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermAppServiceEnvironmentV3Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermAppServiceEnvironmentV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct"></a>

```typescript
import { dataAzurermAppServiceEnvironmentV3 } from '@cdktf/provider-azurerm'

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement"></a>

```typescript
import { dataAzurermAppServiceEnvironmentV3 } from '@cdktf/provider-azurerm'

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource"></a>

```typescript
import { dataAzurermAppServiceEnvironmentV3 } from '@cdktf/provider-azurerm'

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport"></a>

```typescript
import { dataAzurermAppServiceEnvironmentV3 } from '@cdktf/provider-azurerm'

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermAppServiceEnvironmentV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermAppServiceEnvironmentV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermAppServiceEnvironmentV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/app_service_environment_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermAppServiceEnvironmentV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.allowNewPrivateEndpointConnections">allowNewPrivateEndpointConnections</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.clusterSetting">clusterSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList">DataAzurermAppServiceEnvironmentV3ClusterSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dedicatedHostCount">dedicatedHostCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dnsSuffix">dnsSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.externalInboundIpAddresses">externalInboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.inboundNetworkDependencies">inboundNetworkDependencies</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList">DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalInboundIpAddresses">internalInboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalLoadBalancingMode">internalLoadBalancingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.ipSslAddressCount">ipSslAddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.linuxOutboundIpAddresses">linuxOutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.pricingTier">pricingTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference">DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.windowsOutboundIpAddresses">windowsOutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.zoneRedundant">zoneRedundant</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allowNewPrivateEndpointConnections`<sup>Required</sup> <a name="allowNewPrivateEndpointConnections" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.allowNewPrivateEndpointConnections"></a>

```typescript
public readonly allowNewPrivateEndpointConnections: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clusterSetting`<sup>Required</sup> <a name="clusterSetting" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.clusterSetting"></a>

```typescript
public readonly clusterSetting: DataAzurermAppServiceEnvironmentV3ClusterSettingList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList">DataAzurermAppServiceEnvironmentV3ClusterSettingList</a>

---

##### `dedicatedHostCount`<sup>Required</sup> <a name="dedicatedHostCount" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dedicatedHostCount"></a>

```typescript
public readonly dedicatedHostCount: number;
```

- *Type:* number

---

##### `dnsSuffix`<sup>Required</sup> <a name="dnsSuffix" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dnsSuffix"></a>

```typescript
public readonly dnsSuffix: string;
```

- *Type:* string

---

##### `externalInboundIpAddresses`<sup>Required</sup> <a name="externalInboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.externalInboundIpAddresses"></a>

```typescript
public readonly externalInboundIpAddresses: string[];
```

- *Type:* string[]

---

##### `inboundNetworkDependencies`<sup>Required</sup> <a name="inboundNetworkDependencies" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.inboundNetworkDependencies"></a>

```typescript
public readonly inboundNetworkDependencies: DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList">DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList</a>

---

##### `internalInboundIpAddresses`<sup>Required</sup> <a name="internalInboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalInboundIpAddresses"></a>

```typescript
public readonly internalInboundIpAddresses: string[];
```

- *Type:* string[]

---

##### `internalLoadBalancingMode`<sup>Required</sup> <a name="internalLoadBalancingMode" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalLoadBalancingMode"></a>

```typescript
public readonly internalLoadBalancingMode: string;
```

- *Type:* string

---

##### `ipSslAddressCount`<sup>Required</sup> <a name="ipSslAddressCount" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.ipSslAddressCount"></a>

```typescript
public readonly ipSslAddressCount: number;
```

- *Type:* number

---

##### `linuxOutboundIpAddresses`<sup>Required</sup> <a name="linuxOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.linuxOutboundIpAddresses"></a>

```typescript
public readonly linuxOutboundIpAddresses: string[];
```

- *Type:* string[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `pricingTier`<sup>Required</sup> <a name="pricingTier" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.pricingTier"></a>

```typescript
public readonly pricingTier: string;
```

- *Type:* string

---

##### `remoteDebuggingEnabled`<sup>Required</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.remoteDebuggingEnabled"></a>

```typescript
public readonly remoteDebuggingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference">DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference</a>

---

##### `windowsOutboundIpAddresses`<sup>Required</sup> <a name="windowsOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.windowsOutboundIpAddresses"></a>

```typescript
public readonly windowsOutboundIpAddresses: string[];
```

- *Type:* string[]

---

##### `zoneRedundant`<sup>Required</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.zoneRedundant"></a>

```typescript
public readonly zoneRedundant: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermAppServiceEnvironmentV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAppServiceEnvironmentV3ClusterSetting <a name="DataAzurermAppServiceEnvironmentV3ClusterSetting" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting.Initializer"></a>

```typescript
import { dataAzurermAppServiceEnvironmentV3 } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceEnvironmentV3ClusterSetting: dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting = { ... }
```


### DataAzurermAppServiceEnvironmentV3Config <a name="DataAzurermAppServiceEnvironmentV3Config" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.Initializer"></a>

```typescript
import { dataAzurermAppServiceEnvironmentV3 } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceEnvironmentV3Config: dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/app_service_environment_v3#name DataAzurermAppServiceEnvironmentV3#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/app_service_environment_v3#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/app_service_environment_v3#id DataAzurermAppServiceEnvironmentV3#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/app_service_environment_v3#name DataAzurermAppServiceEnvironmentV3#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/app_service_environment_v3#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/app_service_environment_v3#id DataAzurermAppServiceEnvironmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermAppServiceEnvironmentV3Timeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/app_service_environment_v3#timeouts DataAzurermAppServiceEnvironmentV3#timeouts}

---

### DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies.Initializer"></a>

```typescript
import { dataAzurermAppServiceEnvironmentV3 } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceEnvironmentV3InboundNetworkDependencies: dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies = { ... }
```


### DataAzurermAppServiceEnvironmentV3Timeouts <a name="DataAzurermAppServiceEnvironmentV3Timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.Initializer"></a>

```typescript
import { dataAzurermAppServiceEnvironmentV3 } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceEnvironmentV3Timeouts: dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/app_service_environment_v3#read DataAzurermAppServiceEnvironmentV3#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/app_service_environment_v3#read DataAzurermAppServiceEnvironmentV3#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAppServiceEnvironmentV3ClusterSettingList <a name="DataAzurermAppServiceEnvironmentV3ClusterSettingList" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer"></a>

```typescript
import { dataAzurermAppServiceEnvironmentV3 } from '@cdktf/provider-azurerm'

new dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get"></a>

```typescript
public get(index: number): DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference <a name="DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer"></a>

```typescript
import { dataAzurermAppServiceEnvironmentV3 } from '@cdktf/provider-azurerm'

new dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting">DataAzurermAppServiceEnvironmentV3ClusterSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermAppServiceEnvironmentV3ClusterSetting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting">DataAzurermAppServiceEnvironmentV3ClusterSetting</a>

---


### DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer"></a>

```typescript
import { dataAzurermAppServiceEnvironmentV3 } from '@cdktf/provider-azurerm'

new dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get"></a>

```typescript
public get(index: number): DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer"></a>

```typescript
import { dataAzurermAppServiceEnvironmentV3 } from '@cdktf/provider-azurerm'

new dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies">DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies">DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies</a>

---


### DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference <a name="DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermAppServiceEnvironmentV3 } from '@cdktf/provider-azurerm'

new dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermAppServiceEnvironmentV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

---



