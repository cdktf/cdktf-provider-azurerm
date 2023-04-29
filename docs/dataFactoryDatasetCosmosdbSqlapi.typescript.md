# `azurerm_data_factory_dataset_cosmosdb_sqlapi`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_dataset_cosmosdb_sqlapi`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi).

# `dataFactoryDatasetCosmosdbSqlapi` Submodule <a name="`dataFactoryDatasetCosmosdbSqlapi` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetCosmosdbSqlapi <a name="DataFactoryDatasetCosmosdbSqlapi" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi azurerm_data_factory_dataset_cosmosdb_sqlapi}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer"></a>

```typescript
import { dataFactoryDatasetCosmosdbSqlapi } from '@cdktf/provider-azurerm'

new dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi(scope: Construct, id: string, config: DataFactoryDatasetCosmosdbSqlapiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig">DataFactoryDatasetCosmosdbSqlapiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig">DataFactoryDatasetCosmosdbSqlapiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putSchemaColumn">putSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetCollectionName">resetCollectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetSchemaColumn">resetSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSchemaColumn` <a name="putSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putSchemaColumn"></a>

```typescript
public putSchemaColumn(value: IResolvable | DataFactoryDatasetCosmosdbSqlapiSchemaColumn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putSchemaColumn.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryDatasetCosmosdbSqlapiTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetCollectionName` <a name="resetCollectionName" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetCollectionName"></a>

```typescript
public resetCollectionName(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSchemaColumn` <a name="resetSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetSchemaColumn"></a>

```typescript
public resetSchemaColumn(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isConstruct"></a>

```typescript
import { dataFactoryDatasetCosmosdbSqlapi } from '@cdktf/provider-azurerm'

dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformElement"></a>

```typescript
import { dataFactoryDatasetCosmosdbSqlapi } from '@cdktf/provider-azurerm'

dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformResource"></a>

```typescript
import { dataFactoryDatasetCosmosdbSqlapi } from '@cdktf/provider-azurerm'

dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.schemaColumn">schemaColumn</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList">DataFactoryDatasetCosmosdbSqlapiSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference">DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.collectionNameInput">collectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.schemaColumnInput">schemaColumnInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.collectionName">collectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `schemaColumn`<sup>Required</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.schemaColumn"></a>

```typescript
public readonly schemaColumn: DataFactoryDatasetCosmosdbSqlapiSchemaColumnList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList">DataFactoryDatasetCosmosdbSqlapiSchemaColumnList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference">DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `collectionNameInput`<sup>Optional</sup> <a name="collectionNameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.collectionNameInput"></a>

```typescript
public readonly collectionNameInput: string;
```

- *Type:* string

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.linkedServiceNameInput"></a>

```typescript
public readonly linkedServiceNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaColumnInput`<sup>Optional</sup> <a name="schemaColumnInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.schemaColumnInput"></a>

```typescript
public readonly schemaColumnInput: IResolvable | DataFactoryDatasetCosmosdbSqlapiSchemaColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataFactoryDatasetCosmosdbSqlapiTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a> | cdktf.IResolvable

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `collectionName`<sup>Required</sup> <a name="collectionName" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.collectionName"></a>

```typescript
public readonly collectionName: string;
```

- *Type:* string

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetCosmosdbSqlapiConfig <a name="DataFactoryDatasetCosmosdbSqlapiConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.Initializer"></a>

```typescript
import { dataFactoryDatasetCosmosdbSqlapi } from '@cdktf/provider-azurerm'

const dataFactoryDatasetCosmosdbSqlapiConfig: dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#data_factory_id DataFactoryDatasetCosmosdbSqlapi#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#linked_service_name DataFactoryDatasetCosmosdbSqlapi#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#additional_properties DataFactoryDatasetCosmosdbSqlapi#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#annotations DataFactoryDatasetCosmosdbSqlapi#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.collectionName">collectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#collection_name DataFactoryDatasetCosmosdbSqlapi#collection_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.folder">folder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#folder DataFactoryDatasetCosmosdbSqlapi#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#id DataFactoryDatasetCosmosdbSqlapi#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#parameters DataFactoryDatasetCosmosdbSqlapi#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.schemaColumn">schemaColumn</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>[]</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#data_factory_id DataFactoryDatasetCosmosdbSqlapi#data_factory_id}.

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#linked_service_name DataFactoryDatasetCosmosdbSqlapi#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#additional_properties DataFactoryDatasetCosmosdbSqlapi#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#annotations DataFactoryDatasetCosmosdbSqlapi#annotations}.

---

##### `collectionName`<sup>Optional</sup> <a name="collectionName" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.collectionName"></a>

```typescript
public readonly collectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#collection_name DataFactoryDatasetCosmosdbSqlapi#collection_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#folder DataFactoryDatasetCosmosdbSqlapi#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#id DataFactoryDatasetCosmosdbSqlapi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#parameters DataFactoryDatasetCosmosdbSqlapi#parameters}.

---

##### `schemaColumn`<sup>Optional</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.schemaColumn"></a>

```typescript
public readonly schemaColumn: IResolvable | DataFactoryDatasetCosmosdbSqlapiSchemaColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>[]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#schema_column DataFactoryDatasetCosmosdbSqlapi#schema_column}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryDatasetCosmosdbSqlapiTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#timeouts DataFactoryDatasetCosmosdbSqlapi#timeouts}

---

### DataFactoryDatasetCosmosdbSqlapiSchemaColumn <a name="DataFactoryDatasetCosmosdbSqlapiSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.Initializer"></a>

```typescript
import { dataFactoryDatasetCosmosdbSqlapi } from '@cdktf/provider-azurerm'

const dataFactoryDatasetCosmosdbSqlapiSchemaColumn: dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#type DataFactoryDatasetCosmosdbSqlapi#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#type DataFactoryDatasetCosmosdbSqlapi#type}.

---

### DataFactoryDatasetCosmosdbSqlapiTimeouts <a name="DataFactoryDatasetCosmosdbSqlapiTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.Initializer"></a>

```typescript
import { dataFactoryDatasetCosmosdbSqlapi } from '@cdktf/provider-azurerm'

const dataFactoryDatasetCosmosdbSqlapiTimeouts: dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#create DataFactoryDatasetCosmosdbSqlapi#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#delete DataFactoryDatasetCosmosdbSqlapi#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#read DataFactoryDatasetCosmosdbSqlapi#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#update DataFactoryDatasetCosmosdbSqlapi#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#create DataFactoryDatasetCosmosdbSqlapi#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#delete DataFactoryDatasetCosmosdbSqlapi#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#read DataFactoryDatasetCosmosdbSqlapi#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#update DataFactoryDatasetCosmosdbSqlapi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetCosmosdbSqlapiSchemaColumnList <a name="DataFactoryDatasetCosmosdbSqlapiSchemaColumnList" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer"></a>

```typescript
import { dataFactoryDatasetCosmosdbSqlapi } from '@cdktf/provider-azurerm'

new dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.get"></a>

```typescript
public get(index: number): DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryDatasetCosmosdbSqlapiSchemaColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>[]

---


### DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference <a name="DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer"></a>

```typescript
import { dataFactoryDatasetCosmosdbSqlapi } from '@cdktf/provider-azurerm'

new dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryDatasetCosmosdbSqlapiSchemaColumn | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a> | cdktf.IResolvable

---


### DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference <a name="DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryDatasetCosmosdbSqlapi } from '@cdktf/provider-azurerm'

new dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryDatasetCosmosdbSqlapiTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a> | cdktf.IResolvable

---



