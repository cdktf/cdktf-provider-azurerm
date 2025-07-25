# `dataAzurermDataShareDatasetKustoCluster` Submodule <a name="`dataAzurermDataShareDatasetKustoCluster` Submodule" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDataShareDatasetKustoCluster <a name="DataAzurermDataShareDatasetKustoCluster" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/data_share_dataset_kusto_cluster azurerm_data_share_dataset_kusto_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.Initializer"></a>

```typescript
import { dataAzurermDataShareDatasetKustoCluster } from '@cdktf/provider-azurerm'

new dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster(scope: Construct, id: string, config: DataAzurermDataShareDatasetKustoClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig">DataAzurermDataShareDatasetKustoClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig">DataAzurermDataShareDatasetKustoClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermDataShareDatasetKustoClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeouts">DataAzurermDataShareDatasetKustoClusterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermDataShareDatasetKustoCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.isConstruct"></a>

```typescript
import { dataAzurermDataShareDatasetKustoCluster } from '@cdktf/provider-azurerm'

dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.isTerraformElement"></a>

```typescript
import { dataAzurermDataShareDatasetKustoCluster } from '@cdktf/provider-azurerm'

dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.isTerraformDataSource"></a>

```typescript
import { dataAzurermDataShareDatasetKustoCluster } from '@cdktf/provider-azurerm'

dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.generateConfigForImport"></a>

```typescript
import { dataAzurermDataShareDatasetKustoCluster } from '@cdktf/provider-azurerm'

dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermDataShareDatasetKustoCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermDataShareDatasetKustoCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermDataShareDatasetKustoCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/data_share_dataset_kusto_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDataShareDatasetKustoCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.kustoClusterId">kustoClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.kustoClusterLocation">kustoClusterLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference">DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.shareIdInput">shareIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeouts">DataAzurermDataShareDatasetKustoClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.shareId">shareId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `kustoClusterId`<sup>Required</sup> <a name="kustoClusterId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.kustoClusterId"></a>

```typescript
public readonly kustoClusterId: string;
```

- *Type:* string

---

##### `kustoClusterLocation`<sup>Required</sup> <a name="kustoClusterLocation" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.kustoClusterLocation"></a>

```typescript
public readonly kustoClusterLocation: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference">DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `shareIdInput`<sup>Optional</sup> <a name="shareIdInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.shareIdInput"></a>

```typescript
public readonly shareIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermDataShareDatasetKustoClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeouts">DataAzurermDataShareDatasetKustoClusterTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `shareId`<sup>Required</sup> <a name="shareId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.shareId"></a>

```typescript
public readonly shareId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDataShareDatasetKustoClusterConfig <a name="DataAzurermDataShareDatasetKustoClusterConfig" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.Initializer"></a>

```typescript
import { dataAzurermDataShareDatasetKustoCluster } from '@cdktf/provider-azurerm'

const dataAzurermDataShareDatasetKustoClusterConfig: dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/data_share_dataset_kusto_cluster#name DataAzurermDataShareDatasetKustoCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.shareId">shareId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/data_share_dataset_kusto_cluster#share_id DataAzurermDataShareDatasetKustoCluster#share_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/data_share_dataset_kusto_cluster#id DataAzurermDataShareDatasetKustoCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeouts">DataAzurermDataShareDatasetKustoClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/data_share_dataset_kusto_cluster#name DataAzurermDataShareDatasetKustoCluster#name}.

---

##### `shareId`<sup>Required</sup> <a name="shareId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.shareId"></a>

```typescript
public readonly shareId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/data_share_dataset_kusto_cluster#share_id DataAzurermDataShareDatasetKustoCluster#share_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/data_share_dataset_kusto_cluster#id DataAzurermDataShareDatasetKustoCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermDataShareDatasetKustoClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeouts">DataAzurermDataShareDatasetKustoClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/data_share_dataset_kusto_cluster#timeouts DataAzurermDataShareDatasetKustoCluster#timeouts}

---

### DataAzurermDataShareDatasetKustoClusterTimeouts <a name="DataAzurermDataShareDatasetKustoClusterTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeouts.Initializer"></a>

```typescript
import { dataAzurermDataShareDatasetKustoCluster } from '@cdktf/provider-azurerm'

const dataAzurermDataShareDatasetKustoClusterTimeouts: dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/data_share_dataset_kusto_cluster#read DataAzurermDataShareDatasetKustoCluster#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/data_share_dataset_kusto_cluster#read DataAzurermDataShareDatasetKustoCluster#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference <a name="DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermDataShareDatasetKustoCluster } from '@cdktf/provider-azurerm'

new dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeouts">DataAzurermDataShareDatasetKustoClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermDataShareDatasetKustoClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetKustoCluster.DataAzurermDataShareDatasetKustoClusterTimeouts">DataAzurermDataShareDatasetKustoClusterTimeouts</a>

---



