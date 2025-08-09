# `dataShareDatasetKustoDatabase` Submodule <a name="`dataShareDatasetKustoDatabase` Submodule" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataShareDatasetKustoDatabase <a name="DataShareDatasetKustoDatabase" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database azurerm_data_share_dataset_kusto_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.Initializer"></a>

```typescript
import { dataShareDatasetKustoDatabase } from '@cdktf/provider-azurerm'

new dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase(scope: Construct, id: string, config: DataShareDatasetKustoDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig">DataShareDatasetKustoDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig">DataShareDatasetKustoDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: DataShareDatasetKustoDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts">DataShareDatasetKustoDatabaseTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataShareDatasetKustoDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isConstruct"></a>

```typescript
import { dataShareDatasetKustoDatabase } from '@cdktf/provider-azurerm'

dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isTerraformElement"></a>

```typescript
import { dataShareDatasetKustoDatabase } from '@cdktf/provider-azurerm'

dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isTerraformResource"></a>

```typescript
import { dataShareDatasetKustoDatabase } from '@cdktf/provider-azurerm'

dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.generateConfigForImport"></a>

```typescript
import { dataShareDatasetKustoDatabase } from '@cdktf/provider-azurerm'

dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataShareDatasetKustoDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataShareDatasetKustoDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataShareDatasetKustoDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataShareDatasetKustoDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.kustoClusterLocation">kustoClusterLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference">DataShareDatasetKustoDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.kustoDatabaseIdInput">kustoDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.shareIdInput">shareIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts">DataShareDatasetKustoDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.kustoDatabaseId">kustoDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.shareId">shareId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `kustoClusterLocation`<sup>Required</sup> <a name="kustoClusterLocation" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.kustoClusterLocation"></a>

```typescript
public readonly kustoClusterLocation: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: DataShareDatasetKustoDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference">DataShareDatasetKustoDatabaseTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kustoDatabaseIdInput`<sup>Optional</sup> <a name="kustoDatabaseIdInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.kustoDatabaseIdInput"></a>

```typescript
public readonly kustoDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `shareIdInput`<sup>Optional</sup> <a name="shareIdInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.shareIdInput"></a>

```typescript
public readonly shareIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataShareDatasetKustoDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts">DataShareDatasetKustoDatabaseTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kustoDatabaseId`<sup>Required</sup> <a name="kustoDatabaseId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.kustoDatabaseId"></a>

```typescript
public readonly kustoDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `shareId`<sup>Required</sup> <a name="shareId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.shareId"></a>

```typescript
public readonly shareId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataShareDatasetKustoDatabaseConfig <a name="DataShareDatasetKustoDatabaseConfig" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.Initializer"></a>

```typescript
import { dataShareDatasetKustoDatabase } from '@cdktf/provider-azurerm'

const dataShareDatasetKustoDatabaseConfig: dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.kustoDatabaseId">kustoDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#kusto_database_id DataShareDatasetKustoDatabase#kusto_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#name DataShareDatasetKustoDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.shareId">shareId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#share_id DataShareDatasetKustoDatabase#share_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#id DataShareDatasetKustoDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts">DataShareDatasetKustoDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kustoDatabaseId`<sup>Required</sup> <a name="kustoDatabaseId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.kustoDatabaseId"></a>

```typescript
public readonly kustoDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#kusto_database_id DataShareDatasetKustoDatabase#kusto_database_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#name DataShareDatasetKustoDatabase#name}.

---

##### `shareId`<sup>Required</sup> <a name="shareId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.shareId"></a>

```typescript
public readonly shareId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#share_id DataShareDatasetKustoDatabase#share_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#id DataShareDatasetKustoDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataShareDatasetKustoDatabaseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts">DataShareDatasetKustoDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#timeouts DataShareDatasetKustoDatabase#timeouts}

---

### DataShareDatasetKustoDatabaseTimeouts <a name="DataShareDatasetKustoDatabaseTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts.Initializer"></a>

```typescript
import { dataShareDatasetKustoDatabase } from '@cdktf/provider-azurerm'

const dataShareDatasetKustoDatabaseTimeouts: dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#create DataShareDatasetKustoDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#delete DataShareDatasetKustoDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#read DataShareDatasetKustoDatabase#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#create DataShareDatasetKustoDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#delete DataShareDatasetKustoDatabase#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_share_dataset_kusto_database#read DataShareDatasetKustoDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataShareDatasetKustoDatabaseTimeoutsOutputReference <a name="DataShareDatasetKustoDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataShareDatasetKustoDatabase } from '@cdktf/provider-azurerm'

new dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts">DataShareDatasetKustoDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataShareDatasetKustoDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts">DataShareDatasetKustoDatabaseTimeouts</a>

---



