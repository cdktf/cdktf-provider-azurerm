# `data_azurerm_data_share_dataset_data_lake_gen2`

Refer to the Terraform Registory for docs: [`data_azurerm_data_share_dataset_data_lake_gen2`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/data_share_dataset_data_lake_gen2).

# `dataAzurermDataShareDatasetDataLakeGen2` Submodule <a name="`dataAzurermDataShareDatasetDataLakeGen2` Submodule" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDataShareDatasetDataLakeGen2 <a name="DataAzurermDataShareDatasetDataLakeGen2" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/data_share_dataset_data_lake_gen2 azurerm_data_share_dataset_data_lake_gen2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.Initializer"></a>

```typescript
import { dataAzurermDataShareDatasetDataLakeGen2 } from '@cdktf/provider-azurerm'

new dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2(scope: Construct, id: string, config: DataAzurermDataShareDatasetDataLakeGen2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config">DataAzurermDataShareDatasetDataLakeGen2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config">DataAzurermDataShareDatasetDataLakeGen2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermDataShareDatasetDataLakeGen2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts">DataAzurermDataShareDatasetDataLakeGen2Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isConstruct"></a>

```typescript
import { dataAzurermDataShareDatasetDataLakeGen2 } from '@cdktf/provider-azurerm'

dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isTerraformElement"></a>

```typescript
import { dataAzurermDataShareDatasetDataLakeGen2 } from '@cdktf/provider-azurerm'

dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isTerraformDataSource"></a>

```typescript
import { dataAzurermDataShareDatasetDataLakeGen2 } from '@cdktf/provider-azurerm'

dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.fileSystemName">fileSystemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.folderPath">folderPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference">DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.shareIdInput">shareIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts">DataAzurermDataShareDatasetDataLakeGen2Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.shareId">shareId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `fileSystemName`<sup>Required</sup> <a name="fileSystemName" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.fileSystemName"></a>

```typescript
public readonly fileSystemName: string;
```

- *Type:* string

---

##### `folderPath`<sup>Required</sup> <a name="folderPath" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.folderPath"></a>

```typescript
public readonly folderPath: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference">DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `shareIdInput`<sup>Optional</sup> <a name="shareIdInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.shareIdInput"></a>

```typescript
public readonly shareIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzurermDataShareDatasetDataLakeGen2Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts">DataAzurermDataShareDatasetDataLakeGen2Timeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `shareId`<sup>Required</sup> <a name="shareId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.shareId"></a>

```typescript
public readonly shareId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDataShareDatasetDataLakeGen2Config <a name="DataAzurermDataShareDatasetDataLakeGen2Config" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.Initializer"></a>

```typescript
import { dataAzurermDataShareDatasetDataLakeGen2 } from '@cdktf/provider-azurerm'

const dataAzurermDataShareDatasetDataLakeGen2Config: dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/data_share_dataset_data_lake_gen2#name DataAzurermDataShareDatasetDataLakeGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.shareId">shareId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/data_share_dataset_data_lake_gen2#share_id DataAzurermDataShareDatasetDataLakeGen2#share_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/data_share_dataset_data_lake_gen2#id DataAzurermDataShareDatasetDataLakeGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts">DataAzurermDataShareDatasetDataLakeGen2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/data_share_dataset_data_lake_gen2#name DataAzurermDataShareDatasetDataLakeGen2#name}.

---

##### `shareId`<sup>Required</sup> <a name="shareId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.shareId"></a>

```typescript
public readonly shareId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/data_share_dataset_data_lake_gen2#share_id DataAzurermDataShareDatasetDataLakeGen2#share_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/data_share_dataset_data_lake_gen2#id DataAzurermDataShareDatasetDataLakeGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermDataShareDatasetDataLakeGen2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts">DataAzurermDataShareDatasetDataLakeGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/data_share_dataset_data_lake_gen2#timeouts DataAzurermDataShareDatasetDataLakeGen2#timeouts}

---

### DataAzurermDataShareDatasetDataLakeGen2Timeouts <a name="DataAzurermDataShareDatasetDataLakeGen2Timeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts.Initializer"></a>

```typescript
import { dataAzurermDataShareDatasetDataLakeGen2 } from '@cdktf/provider-azurerm'

const dataAzurermDataShareDatasetDataLakeGen2Timeouts: dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/data_share_dataset_data_lake_gen2#read DataAzurermDataShareDatasetDataLakeGen2#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/data_share_dataset_data_lake_gen2#read DataAzurermDataShareDatasetDataLakeGen2#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference <a name="DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermDataShareDatasetDataLakeGen2 } from '@cdktf/provider-azurerm'

new dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts">DataAzurermDataShareDatasetDataLakeGen2Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermDataShareDatasetDataLakeGen2Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts">DataAzurermDataShareDatasetDataLakeGen2Timeouts</a> | cdktf.IResolvable

---



