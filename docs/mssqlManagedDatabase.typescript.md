# `mssqlManagedDatabase` Submodule <a name="`mssqlManagedDatabase` Submodule" id="@cdktf/provider-azurerm.mssqlManagedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedDatabase <a name="MssqlManagedDatabase" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database azurerm_mssql_managed_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer"></a>

```typescript
import { mssqlManagedDatabase } from '@cdktf/provider-azurerm'

new mssqlManagedDatabase.MssqlManagedDatabase(scope: Construct, id: string, config: MssqlManagedDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig">MssqlManagedDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig">MssqlManagedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putLongTermRetentionPolicy">putLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putPointInTimeRestore">putPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetLongTermRetentionPolicy">resetLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetPointInTimeRestore">resetPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetShortTermRetentionDays">resetShortTermRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLongTermRetentionPolicy` <a name="putLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putLongTermRetentionPolicy"></a>

```typescript
public putLongTermRetentionPolicy(value: MssqlManagedDatabaseLongTermRetentionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putLongTermRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a>

---

##### `putPointInTimeRestore` <a name="putPointInTimeRestore" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putPointInTimeRestore"></a>

```typescript
public putPointInTimeRestore(value: MssqlManagedDatabasePointInTimeRestore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putPointInTimeRestore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore">MssqlManagedDatabasePointInTimeRestore</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlManagedDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLongTermRetentionPolicy` <a name="resetLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetLongTermRetentionPolicy"></a>

```typescript
public resetLongTermRetentionPolicy(): void
```

##### `resetPointInTimeRestore` <a name="resetPointInTimeRestore" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetPointInTimeRestore"></a>

```typescript
public resetPointInTimeRestore(): void
```

##### `resetShortTermRetentionDays` <a name="resetShortTermRetentionDays" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetShortTermRetentionDays"></a>

```typescript
public resetShortTermRetentionDays(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlManagedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isConstruct"></a>

```typescript
import { mssqlManagedDatabase } from '@cdktf/provider-azurerm'

mssqlManagedDatabase.MssqlManagedDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformElement"></a>

```typescript
import { mssqlManagedDatabase } from '@cdktf/provider-azurerm'

mssqlManagedDatabase.MssqlManagedDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformResource"></a>

```typescript
import { mssqlManagedDatabase } from '@cdktf/provider-azurerm'

mssqlManagedDatabase.MssqlManagedDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.generateConfigForImport"></a>

```typescript
import { mssqlManagedDatabase } from '@cdktf/provider-azurerm'

mssqlManagedDatabase.MssqlManagedDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MssqlManagedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlManagedDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlManagedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlManagedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.longTermRetentionPolicy">longTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference">MssqlManagedDatabaseLongTermRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.pointInTimeRestore">pointInTimeRestore</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference">MssqlManagedDatabasePointInTimeRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference">MssqlManagedDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.longTermRetentionPolicyInput">longTermRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.pointInTimeRestoreInput">pointInTimeRestoreInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore">MssqlManagedDatabasePointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.shortTermRetentionDaysInput">shortTermRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.shortTermRetentionDays">shortTermRetentionDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `longTermRetentionPolicy`<sup>Required</sup> <a name="longTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.longTermRetentionPolicy"></a>

```typescript
public readonly longTermRetentionPolicy: MssqlManagedDatabaseLongTermRetentionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference">MssqlManagedDatabaseLongTermRetentionPolicyOutputReference</a>

---

##### `pointInTimeRestore`<sup>Required</sup> <a name="pointInTimeRestore" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.pointInTimeRestore"></a>

```typescript
public readonly pointInTimeRestore: MssqlManagedDatabasePointInTimeRestoreOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference">MssqlManagedDatabasePointInTimeRestoreOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlManagedDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference">MssqlManagedDatabaseTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `longTermRetentionPolicyInput`<sup>Optional</sup> <a name="longTermRetentionPolicyInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.longTermRetentionPolicyInput"></a>

```typescript
public readonly longTermRetentionPolicyInput: MssqlManagedDatabaseLongTermRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a>

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pointInTimeRestoreInput`<sup>Optional</sup> <a name="pointInTimeRestoreInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.pointInTimeRestoreInput"></a>

```typescript
public readonly pointInTimeRestoreInput: MssqlManagedDatabasePointInTimeRestore;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore">MssqlManagedDatabasePointInTimeRestore</a>

---

##### `shortTermRetentionDaysInput`<sup>Optional</sup> <a name="shortTermRetentionDaysInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.shortTermRetentionDaysInput"></a>

```typescript
public readonly shortTermRetentionDaysInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlManagedDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `shortTermRetentionDays`<sup>Required</sup> <a name="shortTermRetentionDays" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.shortTermRetentionDays"></a>

```typescript
public readonly shortTermRetentionDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedDatabaseConfig <a name="MssqlManagedDatabaseConfig" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.Initializer"></a>

```typescript
import { mssqlManagedDatabase } from '@cdktf/provider-azurerm'

const mssqlManagedDatabaseConfig: mssqlManagedDatabase.MssqlManagedDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#managed_instance_id MssqlManagedDatabase#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#name MssqlManagedDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#id MssqlManagedDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.longTermRetentionPolicy">longTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a></code> | long_term_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.pointInTimeRestore">pointInTimeRestore</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore">MssqlManagedDatabasePointInTimeRestore</a></code> | point_in_time_restore block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.shortTermRetentionDays">shortTermRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#short_term_retention_days MssqlManagedDatabase#short_term_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#managed_instance_id MssqlManagedDatabase#managed_instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#name MssqlManagedDatabase#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#id MssqlManagedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `longTermRetentionPolicy`<sup>Optional</sup> <a name="longTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.longTermRetentionPolicy"></a>

```typescript
public readonly longTermRetentionPolicy: MssqlManagedDatabaseLongTermRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a>

long_term_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#long_term_retention_policy MssqlManagedDatabase#long_term_retention_policy}

---

##### `pointInTimeRestore`<sup>Optional</sup> <a name="pointInTimeRestore" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.pointInTimeRestore"></a>

```typescript
public readonly pointInTimeRestore: MssqlManagedDatabasePointInTimeRestore;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore">MssqlManagedDatabasePointInTimeRestore</a>

point_in_time_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#point_in_time_restore MssqlManagedDatabase#point_in_time_restore}

---

##### `shortTermRetentionDays`<sup>Optional</sup> <a name="shortTermRetentionDays" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.shortTermRetentionDays"></a>

```typescript
public readonly shortTermRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#short_term_retention_days MssqlManagedDatabase#short_term_retention_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlManagedDatabaseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#timeouts MssqlManagedDatabase#timeouts}

---

### MssqlManagedDatabaseLongTermRetentionPolicy <a name="MssqlManagedDatabaseLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.Initializer"></a>

```typescript
import { mssqlManagedDatabase } from '@cdktf/provider-azurerm'

const mssqlManagedDatabaseLongTermRetentionPolicy: mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.immutableBackupsEnabled">immutableBackupsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#immutable_backups_enabled MssqlManagedDatabase#immutable_backups_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.monthlyRetention">monthlyRetention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#monthly_retention MssqlManagedDatabase#monthly_retention}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.weeklyRetention">weeklyRetention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#weekly_retention MssqlManagedDatabase#weekly_retention}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.weekOfYear">weekOfYear</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#week_of_year MssqlManagedDatabase#week_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.yearlyRetention">yearlyRetention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#yearly_retention MssqlManagedDatabase#yearly_retention}. |

---

##### `immutableBackupsEnabled`<sup>Optional</sup> <a name="immutableBackupsEnabled" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.immutableBackupsEnabled"></a>

```typescript
public readonly immutableBackupsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#immutable_backups_enabled MssqlManagedDatabase#immutable_backups_enabled}.

---

##### `monthlyRetention`<sup>Optional</sup> <a name="monthlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.monthlyRetention"></a>

```typescript
public readonly monthlyRetention: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#monthly_retention MssqlManagedDatabase#monthly_retention}.

---

##### `weeklyRetention`<sup>Optional</sup> <a name="weeklyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.weeklyRetention"></a>

```typescript
public readonly weeklyRetention: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#weekly_retention MssqlManagedDatabase#weekly_retention}.

---

##### `weekOfYear`<sup>Optional</sup> <a name="weekOfYear" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.weekOfYear"></a>

```typescript
public readonly weekOfYear: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#week_of_year MssqlManagedDatabase#week_of_year}.

---

##### `yearlyRetention`<sup>Optional</sup> <a name="yearlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.yearlyRetention"></a>

```typescript
public readonly yearlyRetention: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#yearly_retention MssqlManagedDatabase#yearly_retention}.

---

### MssqlManagedDatabasePointInTimeRestore <a name="MssqlManagedDatabasePointInTimeRestore" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore.Initializer"></a>

```typescript
import { mssqlManagedDatabase } from '@cdktf/provider-azurerm'

const mssqlManagedDatabasePointInTimeRestore: mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore.property.restorePointInTime">restorePointInTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#restore_point_in_time MssqlManagedDatabase#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore.property.sourceDatabaseId">sourceDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#source_database_id MssqlManagedDatabase#source_database_id}. |

---

##### `restorePointInTime`<sup>Required</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore.property.restorePointInTime"></a>

```typescript
public readonly restorePointInTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#restore_point_in_time MssqlManagedDatabase#restore_point_in_time}.

---

##### `sourceDatabaseId`<sup>Required</sup> <a name="sourceDatabaseId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore.property.sourceDatabaseId"></a>

```typescript
public readonly sourceDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#source_database_id MssqlManagedDatabase#source_database_id}.

---

### MssqlManagedDatabaseTimeouts <a name="MssqlManagedDatabaseTimeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.Initializer"></a>

```typescript
import { mssqlManagedDatabase } from '@cdktf/provider-azurerm'

const mssqlManagedDatabaseTimeouts: mssqlManagedDatabase.MssqlManagedDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#create MssqlManagedDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#delete MssqlManagedDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#read MssqlManagedDatabase#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#update MssqlManagedDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#create MssqlManagedDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#delete MssqlManagedDatabase#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#read MssqlManagedDatabase#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/mssql_managed_database#update MssqlManagedDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedDatabaseLongTermRetentionPolicyOutputReference <a name="MssqlManagedDatabaseLongTermRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { mssqlManagedDatabase } from '@cdktf/provider-azurerm'

new mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetImmutableBackupsEnabled">resetImmutableBackupsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetMonthlyRetention">resetMonthlyRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetWeeklyRetention">resetWeeklyRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetWeekOfYear">resetWeekOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetYearlyRetention">resetYearlyRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImmutableBackupsEnabled` <a name="resetImmutableBackupsEnabled" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetImmutableBackupsEnabled"></a>

```typescript
public resetImmutableBackupsEnabled(): void
```

##### `resetMonthlyRetention` <a name="resetMonthlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetMonthlyRetention"></a>

```typescript
public resetMonthlyRetention(): void
```

##### `resetWeeklyRetention` <a name="resetWeeklyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetWeeklyRetention"></a>

```typescript
public resetWeeklyRetention(): void
```

##### `resetWeekOfYear` <a name="resetWeekOfYear" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetWeekOfYear"></a>

```typescript
public resetWeekOfYear(): void
```

##### `resetYearlyRetention` <a name="resetYearlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetYearlyRetention"></a>

```typescript
public resetYearlyRetention(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabledInput">immutableBackupsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetentionInput">monthlyRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetentionInput">weeklyRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYearInput">weekOfYearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetentionInput">yearlyRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabled">immutableBackupsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention">monthlyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention">weeklyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear">weekOfYear</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention">yearlyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `immutableBackupsEnabledInput`<sup>Optional</sup> <a name="immutableBackupsEnabledInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabledInput"></a>

```typescript
public readonly immutableBackupsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monthlyRetentionInput`<sup>Optional</sup> <a name="monthlyRetentionInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetentionInput"></a>

```typescript
public readonly monthlyRetentionInput: string;
```

- *Type:* string

---

##### `weeklyRetentionInput`<sup>Optional</sup> <a name="weeklyRetentionInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetentionInput"></a>

```typescript
public readonly weeklyRetentionInput: string;
```

- *Type:* string

---

##### `weekOfYearInput`<sup>Optional</sup> <a name="weekOfYearInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYearInput"></a>

```typescript
public readonly weekOfYearInput: number;
```

- *Type:* number

---

##### `yearlyRetentionInput`<sup>Optional</sup> <a name="yearlyRetentionInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetentionInput"></a>

```typescript
public readonly yearlyRetentionInput: string;
```

- *Type:* string

---

##### `immutableBackupsEnabled`<sup>Required</sup> <a name="immutableBackupsEnabled" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabled"></a>

```typescript
public readonly immutableBackupsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monthlyRetention`<sup>Required</sup> <a name="monthlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention"></a>

```typescript
public readonly monthlyRetention: string;
```

- *Type:* string

---

##### `weeklyRetention`<sup>Required</sup> <a name="weeklyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention"></a>

```typescript
public readonly weeklyRetention: string;
```

- *Type:* string

---

##### `weekOfYear`<sup>Required</sup> <a name="weekOfYear" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear"></a>

```typescript
public readonly weekOfYear: number;
```

- *Type:* number

---

##### `yearlyRetention`<sup>Required</sup> <a name="yearlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention"></a>

```typescript
public readonly yearlyRetention: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlManagedDatabaseLongTermRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a>

---


### MssqlManagedDatabasePointInTimeRestoreOutputReference <a name="MssqlManagedDatabasePointInTimeRestoreOutputReference" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer"></a>

```typescript
import { mssqlManagedDatabase } from '@cdktf/provider-azurerm'

new mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.restorePointInTimeInput">restorePointInTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.sourceDatabaseIdInput">sourceDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.restorePointInTime">restorePointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.sourceDatabaseId">sourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore">MssqlManagedDatabasePointInTimeRestore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `restorePointInTimeInput`<sup>Optional</sup> <a name="restorePointInTimeInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.restorePointInTimeInput"></a>

```typescript
public readonly restorePointInTimeInput: string;
```

- *Type:* string

---

##### `sourceDatabaseIdInput`<sup>Optional</sup> <a name="sourceDatabaseIdInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.sourceDatabaseIdInput"></a>

```typescript
public readonly sourceDatabaseIdInput: string;
```

- *Type:* string

---

##### `restorePointInTime`<sup>Required</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.restorePointInTime"></a>

```typescript
public readonly restorePointInTime: string;
```

- *Type:* string

---

##### `sourceDatabaseId`<sup>Required</sup> <a name="sourceDatabaseId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.sourceDatabaseId"></a>

```typescript
public readonly sourceDatabaseId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlManagedDatabasePointInTimeRestore;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore">MssqlManagedDatabasePointInTimeRestore</a>

---


### MssqlManagedDatabaseTimeoutsOutputReference <a name="MssqlManagedDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlManagedDatabase } from '@cdktf/provider-azurerm'

new mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlManagedDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a>

---



