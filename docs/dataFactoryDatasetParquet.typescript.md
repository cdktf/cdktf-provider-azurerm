# `azurerm_data_factory_dataset_parquet`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_dataset_parquet`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet).

# `dataFactoryDatasetParquet` Submodule <a name="`dataFactoryDatasetParquet` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetParquet <a name="DataFactoryDatasetParquet" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet azurerm_data_factory_dataset_parquet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer"></a>

```typescript
import { dataFactoryDatasetParquet } from '@cdktf/provider-azurerm'

new dataFactoryDatasetParquet.DataFactoryDatasetParquet(scope: Construct, id: string, config: DataFactoryDatasetParquetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig">DataFactoryDatasetParquetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig">DataFactoryDatasetParquetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobStorageLocation">putAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putHttpServerLocation">putHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putSchemaColumn">putSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAzureBlobStorageLocation">resetAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetCompressionCodec">resetCompressionCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetCompressionLevel">resetCompressionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetHttpServerLocation">resetHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetSchemaColumn">resetSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAzureBlobStorageLocation` <a name="putAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobStorageLocation"></a>

```typescript
public putAzureBlobStorageLocation(value: DataFactoryDatasetParquetAzureBlobStorageLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a>

---

##### `putHttpServerLocation` <a name="putHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putHttpServerLocation"></a>

```typescript
public putHttpServerLocation(value: DataFactoryDatasetParquetHttpServerLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putHttpServerLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a>

---

##### `putSchemaColumn` <a name="putSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putSchemaColumn"></a>

```typescript
public putSchemaColumn(value: IResolvable | DataFactoryDatasetParquetSchemaColumn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putSchemaColumn.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryDatasetParquetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAzureBlobStorageLocation` <a name="resetAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAzureBlobStorageLocation"></a>

```typescript
public resetAzureBlobStorageLocation(): void
```

##### `resetCompressionCodec` <a name="resetCompressionCodec" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetCompressionCodec"></a>

```typescript
public resetCompressionCodec(): void
```

##### `resetCompressionLevel` <a name="resetCompressionLevel" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetCompressionLevel"></a>

```typescript
public resetCompressionLevel(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetHttpServerLocation` <a name="resetHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetHttpServerLocation"></a>

```typescript
public resetHttpServerLocation(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSchemaColumn` <a name="resetSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetSchemaColumn"></a>

```typescript
public resetSchemaColumn(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isConstruct"></a>

```typescript
import { dataFactoryDatasetParquet } from '@cdktf/provider-azurerm'

dataFactoryDatasetParquet.DataFactoryDatasetParquet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformElement"></a>

```typescript
import { dataFactoryDatasetParquet } from '@cdktf/provider-azurerm'

dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformResource"></a>

```typescript
import { dataFactoryDatasetParquet } from '@cdktf/provider-azurerm'

dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobStorageLocation">azureBlobStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference">DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.httpServerLocation">httpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference">DataFactoryDatasetParquetHttpServerLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.schemaColumn">schemaColumn</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList">DataFactoryDatasetParquetSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference">DataFactoryDatasetParquetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobStorageLocationInput">azureBlobStorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionCodecInput">compressionCodecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionLevelInput">compressionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.httpServerLocationInput">httpServerLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.schemaColumnInput">schemaColumnInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionCodec">compressionCodec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionLevel">compressionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `azureBlobStorageLocation`<sup>Required</sup> <a name="azureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobStorageLocation"></a>

```typescript
public readonly azureBlobStorageLocation: DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference">DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference</a>

---

##### `httpServerLocation`<sup>Required</sup> <a name="httpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.httpServerLocation"></a>

```typescript
public readonly httpServerLocation: DataFactoryDatasetParquetHttpServerLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference">DataFactoryDatasetParquetHttpServerLocationOutputReference</a>

---

##### `schemaColumn`<sup>Required</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.schemaColumn"></a>

```typescript
public readonly schemaColumn: DataFactoryDatasetParquetSchemaColumnList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList">DataFactoryDatasetParquetSchemaColumnList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryDatasetParquetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference">DataFactoryDatasetParquetTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `azureBlobStorageLocationInput`<sup>Optional</sup> <a name="azureBlobStorageLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobStorageLocationInput"></a>

```typescript
public readonly azureBlobStorageLocationInput: DataFactoryDatasetParquetAzureBlobStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a>

---

##### `compressionCodecInput`<sup>Optional</sup> <a name="compressionCodecInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionCodecInput"></a>

```typescript
public readonly compressionCodecInput: string;
```

- *Type:* string

---

##### `compressionLevelInput`<sup>Optional</sup> <a name="compressionLevelInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionLevelInput"></a>

```typescript
public readonly compressionLevelInput: string;
```

- *Type:* string

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `httpServerLocationInput`<sup>Optional</sup> <a name="httpServerLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.httpServerLocationInput"></a>

```typescript
public readonly httpServerLocationInput: DataFactoryDatasetParquetHttpServerLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.linkedServiceNameInput"></a>

```typescript
public readonly linkedServiceNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaColumnInput`<sup>Optional</sup> <a name="schemaColumnInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.schemaColumnInput"></a>

```typescript
public readonly schemaColumnInput: IResolvable | DataFactoryDatasetParquetSchemaColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryDatasetParquetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `compressionCodec`<sup>Required</sup> <a name="compressionCodec" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionCodec"></a>

```typescript
public readonly compressionCodec: string;
```

- *Type:* string

---

##### `compressionLevel`<sup>Required</sup> <a name="compressionLevel" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionLevel"></a>

```typescript
public readonly compressionLevel: string;
```

- *Type:* string

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetParquetAzureBlobStorageLocation <a name="DataFactoryDatasetParquetAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.Initializer"></a>

```typescript
import { dataFactoryDatasetParquet } from '@cdktf/provider-azurerm'

const dataFactoryDatasetParquetAzureBlobStorageLocation: dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.container">container</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#container DataFactoryDatasetParquet#container}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicContainerEnabled">dynamicContainerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#dynamic_container_enabled DataFactoryDatasetParquet#dynamic_container_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.filename">filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#container DataFactoryDatasetParquet#container}.

---

##### `dynamicContainerEnabled`<sup>Optional</sup> <a name="dynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicContainerEnabled"></a>

```typescript
public readonly dynamicContainerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#dynamic_container_enabled DataFactoryDatasetParquet#dynamic_container_enabled}.

---

##### `dynamicFilenameEnabled`<sup>Optional</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicFilenameEnabled"></a>

```typescript
public readonly dynamicFilenameEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}.

---

##### `dynamicPathEnabled`<sup>Optional</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicPathEnabled"></a>

```typescript
public readonly dynamicPathEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}.

---

### DataFactoryDatasetParquetConfig <a name="DataFactoryDatasetParquetConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.Initializer"></a>

```typescript
import { dataFactoryDatasetParquet } from '@cdktf/provider-azurerm'

const dataFactoryDatasetParquetConfig: dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#data_factory_id DataFactoryDatasetParquet#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#linked_service_name DataFactoryDatasetParquet#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#additional_properties DataFactoryDatasetParquet#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#annotations DataFactoryDatasetParquet#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.azureBlobStorageLocation">azureBlobStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a></code> | azure_blob_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.compressionCodec">compressionCodec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#compression_codec DataFactoryDatasetParquet#compression_codec}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.compressionLevel">compressionLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#compression_level DataFactoryDatasetParquet#compression_level}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.folder">folder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#folder DataFactoryDatasetParquet#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.httpServerLocation">httpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a></code> | http_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#id DataFactoryDatasetParquet#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#parameters DataFactoryDatasetParquet#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.schemaColumn">schemaColumn</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>[]</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#data_factory_id DataFactoryDatasetParquet#data_factory_id}.

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#linked_service_name DataFactoryDatasetParquet#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#additional_properties DataFactoryDatasetParquet#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#annotations DataFactoryDatasetParquet#annotations}.

---

##### `azureBlobStorageLocation`<sup>Optional</sup> <a name="azureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.azureBlobStorageLocation"></a>

```typescript
public readonly azureBlobStorageLocation: DataFactoryDatasetParquetAzureBlobStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a>

azure_blob_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#azure_blob_storage_location DataFactoryDatasetParquet#azure_blob_storage_location}

---

##### `compressionCodec`<sup>Optional</sup> <a name="compressionCodec" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.compressionCodec"></a>

```typescript
public readonly compressionCodec: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#compression_codec DataFactoryDatasetParquet#compression_codec}.

---

##### `compressionLevel`<sup>Optional</sup> <a name="compressionLevel" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.compressionLevel"></a>

```typescript
public readonly compressionLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#compression_level DataFactoryDatasetParquet#compression_level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#folder DataFactoryDatasetParquet#folder}.

---

##### `httpServerLocation`<sup>Optional</sup> <a name="httpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.httpServerLocation"></a>

```typescript
public readonly httpServerLocation: DataFactoryDatasetParquetHttpServerLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a>

http_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#http_server_location DataFactoryDatasetParquet#http_server_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#id DataFactoryDatasetParquet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#parameters DataFactoryDatasetParquet#parameters}.

---

##### `schemaColumn`<sup>Optional</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.schemaColumn"></a>

```typescript
public readonly schemaColumn: IResolvable | DataFactoryDatasetParquetSchemaColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>[]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#schema_column DataFactoryDatasetParquet#schema_column}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryDatasetParquetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#timeouts DataFactoryDatasetParquet#timeouts}

---

### DataFactoryDatasetParquetHttpServerLocation <a name="DataFactoryDatasetParquetHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.Initializer"></a>

```typescript
import { dataFactoryDatasetParquet } from '@cdktf/provider-azurerm'

const dataFactoryDatasetParquetHttpServerLocation: dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.filename">filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.relativeUrl">relativeUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#relative_url DataFactoryDatasetParquet#relative_url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}. |

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}.

---

##### `relativeUrl`<sup>Required</sup> <a name="relativeUrl" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.relativeUrl"></a>

```typescript
public readonly relativeUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#relative_url DataFactoryDatasetParquet#relative_url}.

---

##### `dynamicFilenameEnabled`<sup>Optional</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.dynamicFilenameEnabled"></a>

```typescript
public readonly dynamicFilenameEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}.

---

##### `dynamicPathEnabled`<sup>Optional</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.dynamicPathEnabled"></a>

```typescript
public readonly dynamicPathEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}.

---

### DataFactoryDatasetParquetSchemaColumn <a name="DataFactoryDatasetParquetSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.Initializer"></a>

```typescript
import { dataFactoryDatasetParquet } from '@cdktf/provider-azurerm'

const dataFactoryDatasetParquetSchemaColumn: dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#type DataFactoryDatasetParquet#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#type DataFactoryDatasetParquet#type}.

---

### DataFactoryDatasetParquetTimeouts <a name="DataFactoryDatasetParquetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.Initializer"></a>

```typescript
import { dataFactoryDatasetParquet } from '@cdktf/provider-azurerm'

const dataFactoryDatasetParquetTimeouts: dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#create DataFactoryDatasetParquet#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#delete DataFactoryDatasetParquet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#read DataFactoryDatasetParquet#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#update DataFactoryDatasetParquet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#create DataFactoryDatasetParquet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#delete DataFactoryDatasetParquet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#read DataFactoryDatasetParquet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_dataset_parquet#update DataFactoryDatasetParquet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference <a name="DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer"></a>

```typescript
import { dataFactoryDatasetParquet } from '@cdktf/provider-azurerm'

new dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled">resetDynamicContainerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled">resetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled">resetDynamicPathEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDynamicContainerEnabled` <a name="resetDynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled"></a>

```typescript
public resetDynamicContainerEnabled(): void
```

##### `resetDynamicFilenameEnabled` <a name="resetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled"></a>

```typescript
public resetDynamicFilenameEnabled(): void
```

##### `resetDynamicPathEnabled` <a name="resetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled"></a>

```typescript
public resetDynamicPathEnabled(): void
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetFilename"></a>

```typescript
public resetFilename(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.containerInput">containerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput">dynamicContainerEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput">dynamicFilenameEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput">dynamicPathEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled">dynamicContainerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: string;
```

- *Type:* string

---

##### `dynamicContainerEnabledInput`<sup>Optional</sup> <a name="dynamicContainerEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput"></a>

```typescript
public readonly dynamicContainerEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicFilenameEnabledInput`<sup>Optional</sup> <a name="dynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```typescript
public readonly dynamicFilenameEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicPathEnabledInput`<sup>Optional</sup> <a name="dynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput"></a>

```typescript
public readonly dynamicPathEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `dynamicContainerEnabled`<sup>Required</sup> <a name="dynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled"></a>

```typescript
public readonly dynamicContainerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicFilenameEnabled`<sup>Required</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled"></a>

```typescript
public readonly dynamicFilenameEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicPathEnabled`<sup>Required</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled"></a>

```typescript
public readonly dynamicPathEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryDatasetParquetAzureBlobStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a>

---


### DataFactoryDatasetParquetHttpServerLocationOutputReference <a name="DataFactoryDatasetParquetHttpServerLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer"></a>

```typescript
import { dataFactoryDatasetParquet } from '@cdktf/provider-azurerm'

new dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetDynamicFilenameEnabled">resetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetDynamicPathEnabled">resetDynamicPathEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDynamicFilenameEnabled` <a name="resetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetDynamicFilenameEnabled"></a>

```typescript
public resetDynamicFilenameEnabled(): void
```

##### `resetDynamicPathEnabled` <a name="resetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetDynamicPathEnabled"></a>

```typescript
public resetDynamicPathEnabled(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput">dynamicFilenameEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicPathEnabledInput">dynamicPathEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.relativeUrlInput">relativeUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.relativeUrl">relativeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamicFilenameEnabledInput`<sup>Optional</sup> <a name="dynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```typescript
public readonly dynamicFilenameEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicPathEnabledInput`<sup>Optional</sup> <a name="dynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicPathEnabledInput"></a>

```typescript
public readonly dynamicPathEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `relativeUrlInput`<sup>Optional</sup> <a name="relativeUrlInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.relativeUrlInput"></a>

```typescript
public readonly relativeUrlInput: string;
```

- *Type:* string

---

##### `dynamicFilenameEnabled`<sup>Required</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicFilenameEnabled"></a>

```typescript
public readonly dynamicFilenameEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicPathEnabled`<sup>Required</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicPathEnabled"></a>

```typescript
public readonly dynamicPathEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `relativeUrl`<sup>Required</sup> <a name="relativeUrl" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.relativeUrl"></a>

```typescript
public readonly relativeUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryDatasetParquetHttpServerLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a>

---


### DataFactoryDatasetParquetSchemaColumnList <a name="DataFactoryDatasetParquetSchemaColumnList" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer"></a>

```typescript
import { dataFactoryDatasetParquet } from '@cdktf/provider-azurerm'

new dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.get"></a>

```typescript
public get(index: number): DataFactoryDatasetParquetSchemaColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryDatasetParquetSchemaColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>[]

---


### DataFactoryDatasetParquetSchemaColumnOutputReference <a name="DataFactoryDatasetParquetSchemaColumnOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer"></a>

```typescript
import { dataFactoryDatasetParquet } from '@cdktf/provider-azurerm'

new dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryDatasetParquetSchemaColumn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>

---


### DataFactoryDatasetParquetTimeoutsOutputReference <a name="DataFactoryDatasetParquetTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryDatasetParquet } from '@cdktf/provider-azurerm'

new dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryDatasetParquetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>

---



