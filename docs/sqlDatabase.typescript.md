# `sqlDatabase` Submodule <a name="`sqlDatabase` Submodule" id="@cdktf/provider-azurerm.sqlDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlDatabase <a name="SqlDatabase" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database azurerm_sql_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer"></a>

```typescript
import { sqlDatabase } from '@cdktf/provider-azurerm'

new sqlDatabase.SqlDatabase(scope: Construct, id: string, config: SqlDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig">SqlDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig">SqlDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putImport">putImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putThreatDetectionPolicy">putThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetCollation">resetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetCreateMode">resetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetElasticPoolName">resetElasticPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetImport">resetImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetMaxSizeBytes">resetMaxSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetMaxSizeGb">resetMaxSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetReadScale">resetReadScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetRequestedServiceObjectiveId">resetRequestedServiceObjectiveId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetRequestedServiceObjectiveName">resetRequestedServiceObjectiveName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetRestorePointInTime">resetRestorePointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetSourceDatabaseDeletionDate">resetSourceDatabaseDeletionDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetSourceDatabaseId">resetSourceDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetThreatDetectionPolicy">resetThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetZoneRedundant">resetZoneRedundant</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImport` <a name="putImport" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putImport"></a>

```typescript
public putImport(value: SqlDatabaseImport): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putImport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a>

---

##### `putThreatDetectionPolicy` <a name="putThreatDetectionPolicy" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putThreatDetectionPolicy"></a>

```typescript
public putThreatDetectionPolicy(value: SqlDatabaseThreatDetectionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putThreatDetectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: SqlDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a>

---

##### `resetCollation` <a name="resetCollation" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetCollation"></a>

```typescript
public resetCollation(): void
```

##### `resetCreateMode` <a name="resetCreateMode" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetCreateMode"></a>

```typescript
public resetCreateMode(): void
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetEdition"></a>

```typescript
public resetEdition(): void
```

##### `resetElasticPoolName` <a name="resetElasticPoolName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetElasticPoolName"></a>

```typescript
public resetElasticPoolName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImport` <a name="resetImport" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetImport"></a>

```typescript
public resetImport(): void
```

##### `resetMaxSizeBytes` <a name="resetMaxSizeBytes" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetMaxSizeBytes"></a>

```typescript
public resetMaxSizeBytes(): void
```

##### `resetMaxSizeGb` <a name="resetMaxSizeGb" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetMaxSizeGb"></a>

```typescript
public resetMaxSizeGb(): void
```

##### `resetReadScale` <a name="resetReadScale" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetReadScale"></a>

```typescript
public resetReadScale(): void
```

##### `resetRequestedServiceObjectiveId` <a name="resetRequestedServiceObjectiveId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetRequestedServiceObjectiveId"></a>

```typescript
public resetRequestedServiceObjectiveId(): void
```

##### `resetRequestedServiceObjectiveName` <a name="resetRequestedServiceObjectiveName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetRequestedServiceObjectiveName"></a>

```typescript
public resetRequestedServiceObjectiveName(): void
```

##### `resetRestorePointInTime` <a name="resetRestorePointInTime" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetRestorePointInTime"></a>

```typescript
public resetRestorePointInTime(): void
```

##### `resetSourceDatabaseDeletionDate` <a name="resetSourceDatabaseDeletionDate" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetSourceDatabaseDeletionDate"></a>

```typescript
public resetSourceDatabaseDeletionDate(): void
```

##### `resetSourceDatabaseId` <a name="resetSourceDatabaseId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetSourceDatabaseId"></a>

```typescript
public resetSourceDatabaseId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThreatDetectionPolicy` <a name="resetThreatDetectionPolicy" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetThreatDetectionPolicy"></a>

```typescript
public resetThreatDetectionPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZoneRedundant` <a name="resetZoneRedundant" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetZoneRedundant"></a>

```typescript
public resetZoneRedundant(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isConstruct"></a>

```typescript
import { sqlDatabase } from '@cdktf/provider-azurerm'

sqlDatabase.SqlDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isTerraformElement"></a>

```typescript
import { sqlDatabase } from '@cdktf/provider-azurerm'

sqlDatabase.SqlDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isTerraformResource"></a>

```typescript
import { sqlDatabase } from '@cdktf/provider-azurerm'

sqlDatabase.SqlDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.generateConfigForImport"></a>

```typescript
import { sqlDatabase } from '@cdktf/provider-azurerm'

sqlDatabase.SqlDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SqlDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.defaultSecondaryLocation">defaultSecondaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.encryption">encryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.import">import</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference">SqlDatabaseImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.threatDetectionPolicy">threatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference">SqlDatabaseThreatDetectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference">SqlDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.collationInput">collationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.createModeInput">createModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.editionInput">editionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.elasticPoolNameInput">elasticPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.importInput">importInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeBytesInput">maxSizeBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeGbInput">maxSizeGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.readScaleInput">readScaleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveIdInput">requestedServiceObjectiveIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveNameInput">requestedServiceObjectiveNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.restorePointInTimeInput">restorePointInTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseDeletionDateInput">sourceDatabaseDeletionDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseIdInput">sourceDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.threatDetectionPolicyInput">threatDetectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.zoneRedundantInput">zoneRedundantInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.collation">collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.createMode">createMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.elasticPoolName">elasticPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeBytes">maxSizeBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeGb">maxSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.readScale">readScale</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveId">requestedServiceObjectiveId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveName">requestedServiceObjectiveName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.restorePointInTime">restorePointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseDeletionDate">sourceDatabaseDeletionDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseId">sourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.zoneRedundant">zoneRedundant</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `defaultSecondaryLocation`<sup>Required</sup> <a name="defaultSecondaryLocation" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.defaultSecondaryLocation"></a>

```typescript
public readonly defaultSecondaryLocation: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.encryption"></a>

```typescript
public readonly encryption: string;
```

- *Type:* string

---

##### `import`<sup>Required</sup> <a name="import" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.import"></a>

```typescript
public readonly import: SqlDatabaseImportOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference">SqlDatabaseImportOutputReference</a>

---

##### `threatDetectionPolicy`<sup>Required</sup> <a name="threatDetectionPolicy" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.threatDetectionPolicy"></a>

```typescript
public readonly threatDetectionPolicy: SqlDatabaseThreatDetectionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference">SqlDatabaseThreatDetectionPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: SqlDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference">SqlDatabaseTimeoutsOutputReference</a>

---

##### `collationInput`<sup>Optional</sup> <a name="collationInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.collationInput"></a>

```typescript
public readonly collationInput: string;
```

- *Type:* string

---

##### `createModeInput`<sup>Optional</sup> <a name="createModeInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.createModeInput"></a>

```typescript
public readonly createModeInput: string;
```

- *Type:* string

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.editionInput"></a>

```typescript
public readonly editionInput: string;
```

- *Type:* string

---

##### `elasticPoolNameInput`<sup>Optional</sup> <a name="elasticPoolNameInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.elasticPoolNameInput"></a>

```typescript
public readonly elasticPoolNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importInput`<sup>Optional</sup> <a name="importInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.importInput"></a>

```typescript
public readonly importInput: SqlDatabaseImport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maxSizeBytesInput`<sup>Optional</sup> <a name="maxSizeBytesInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeBytesInput"></a>

```typescript
public readonly maxSizeBytesInput: string;
```

- *Type:* string

---

##### `maxSizeGbInput`<sup>Optional</sup> <a name="maxSizeGbInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeGbInput"></a>

```typescript
public readonly maxSizeGbInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `readScaleInput`<sup>Optional</sup> <a name="readScaleInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.readScaleInput"></a>

```typescript
public readonly readScaleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requestedServiceObjectiveIdInput`<sup>Optional</sup> <a name="requestedServiceObjectiveIdInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveIdInput"></a>

```typescript
public readonly requestedServiceObjectiveIdInput: string;
```

- *Type:* string

---

##### `requestedServiceObjectiveNameInput`<sup>Optional</sup> <a name="requestedServiceObjectiveNameInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveNameInput"></a>

```typescript
public readonly requestedServiceObjectiveNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `restorePointInTimeInput`<sup>Optional</sup> <a name="restorePointInTimeInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.restorePointInTimeInput"></a>

```typescript
public readonly restorePointInTimeInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `sourceDatabaseDeletionDateInput`<sup>Optional</sup> <a name="sourceDatabaseDeletionDateInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseDeletionDateInput"></a>

```typescript
public readonly sourceDatabaseDeletionDateInput: string;
```

- *Type:* string

---

##### `sourceDatabaseIdInput`<sup>Optional</sup> <a name="sourceDatabaseIdInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseIdInput"></a>

```typescript
public readonly sourceDatabaseIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `threatDetectionPolicyInput`<sup>Optional</sup> <a name="threatDetectionPolicyInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.threatDetectionPolicyInput"></a>

```typescript
public readonly threatDetectionPolicyInput: SqlDatabaseThreatDetectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SqlDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a>

---

##### `zoneRedundantInput`<sup>Optional</sup> <a name="zoneRedundantInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.zoneRedundantInput"></a>

```typescript
public readonly zoneRedundantInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string

---

##### `createMode`<sup>Required</sup> <a name="createMode" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.createMode"></a>

```typescript
public readonly createMode: string;
```

- *Type:* string

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `elasticPoolName`<sup>Required</sup> <a name="elasticPoolName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.elasticPoolName"></a>

```typescript
public readonly elasticPoolName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maxSizeBytes`<sup>Required</sup> <a name="maxSizeBytes" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeBytes"></a>

```typescript
public readonly maxSizeBytes: string;
```

- *Type:* string

---

##### `maxSizeGb`<sup>Required</sup> <a name="maxSizeGb" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeGb"></a>

```typescript
public readonly maxSizeGb: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `readScale`<sup>Required</sup> <a name="readScale" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.readScale"></a>

```typescript
public readonly readScale: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requestedServiceObjectiveId`<sup>Required</sup> <a name="requestedServiceObjectiveId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveId"></a>

```typescript
public readonly requestedServiceObjectiveId: string;
```

- *Type:* string

---

##### `requestedServiceObjectiveName`<sup>Required</sup> <a name="requestedServiceObjectiveName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveName"></a>

```typescript
public readonly requestedServiceObjectiveName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `restorePointInTime`<sup>Required</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.restorePointInTime"></a>

```typescript
public readonly restorePointInTime: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sourceDatabaseDeletionDate`<sup>Required</sup> <a name="sourceDatabaseDeletionDate" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseDeletionDate"></a>

```typescript
public readonly sourceDatabaseDeletionDate: string;
```

- *Type:* string

---

##### `sourceDatabaseId`<sup>Required</sup> <a name="sourceDatabaseId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseId"></a>

```typescript
public readonly sourceDatabaseId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zoneRedundant`<sup>Required</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.zoneRedundant"></a>

```typescript
public readonly zoneRedundant: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlDatabaseConfig <a name="SqlDatabaseConfig" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.Initializer"></a>

```typescript
import { sqlDatabase } from '@cdktf/provider-azurerm'

const sqlDatabaseConfig: sqlDatabase.SqlDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#location SqlDatabase#location}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#name SqlDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#resource_group_name SqlDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#server_name SqlDatabase#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.collation">collation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#collation SqlDatabase#collation}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.createMode">createMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#create_mode SqlDatabase#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.edition">edition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#edition SqlDatabase#edition}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.elasticPoolName">elasticPoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#elastic_pool_name SqlDatabase#elastic_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#id SqlDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.import">import</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a></code> | import block. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.maxSizeBytes">maxSizeBytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#max_size_bytes SqlDatabase#max_size_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.maxSizeGb">maxSizeGb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#max_size_gb SqlDatabase#max_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.readScale">readScale</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#read_scale SqlDatabase#read_scale}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.requestedServiceObjectiveId">requestedServiceObjectiveId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#requested_service_objective_id SqlDatabase#requested_service_objective_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.requestedServiceObjectiveName">requestedServiceObjectiveName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#requested_service_objective_name SqlDatabase#requested_service_objective_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.restorePointInTime">restorePointInTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#restore_point_in_time SqlDatabase#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.sourceDatabaseDeletionDate">sourceDatabaseDeletionDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#source_database_deletion_date SqlDatabase#source_database_deletion_date}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.sourceDatabaseId">sourceDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#source_database_id SqlDatabase#source_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#tags SqlDatabase#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.threatDetectionPolicy">threatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a></code> | threat_detection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.zoneRedundant">zoneRedundant</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#zone_redundant SqlDatabase#zone_redundant}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#location SqlDatabase#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#name SqlDatabase#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#resource_group_name SqlDatabase#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#server_name SqlDatabase#server_name}.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#collation SqlDatabase#collation}.

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.createMode"></a>

```typescript
public readonly createMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#create_mode SqlDatabase#create_mode}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#edition SqlDatabase#edition}.

---

##### `elasticPoolName`<sup>Optional</sup> <a name="elasticPoolName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.elasticPoolName"></a>

```typescript
public readonly elasticPoolName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#elastic_pool_name SqlDatabase#elastic_pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#id SqlDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import`<sup>Optional</sup> <a name="import" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.import"></a>

```typescript
public readonly import: SqlDatabaseImport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a>

import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#import SqlDatabase#import}

---

##### `maxSizeBytes`<sup>Optional</sup> <a name="maxSizeBytes" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.maxSizeBytes"></a>

```typescript
public readonly maxSizeBytes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#max_size_bytes SqlDatabase#max_size_bytes}.

---

##### `maxSizeGb`<sup>Optional</sup> <a name="maxSizeGb" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.maxSizeGb"></a>

```typescript
public readonly maxSizeGb: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#max_size_gb SqlDatabase#max_size_gb}.

---

##### `readScale`<sup>Optional</sup> <a name="readScale" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.readScale"></a>

```typescript
public readonly readScale: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#read_scale SqlDatabase#read_scale}.

---

##### `requestedServiceObjectiveId`<sup>Optional</sup> <a name="requestedServiceObjectiveId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.requestedServiceObjectiveId"></a>

```typescript
public readonly requestedServiceObjectiveId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#requested_service_objective_id SqlDatabase#requested_service_objective_id}.

---

##### `requestedServiceObjectiveName`<sup>Optional</sup> <a name="requestedServiceObjectiveName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.requestedServiceObjectiveName"></a>

```typescript
public readonly requestedServiceObjectiveName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#requested_service_objective_name SqlDatabase#requested_service_objective_name}.

---

##### `restorePointInTime`<sup>Optional</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.restorePointInTime"></a>

```typescript
public readonly restorePointInTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#restore_point_in_time SqlDatabase#restore_point_in_time}.

---

##### `sourceDatabaseDeletionDate`<sup>Optional</sup> <a name="sourceDatabaseDeletionDate" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.sourceDatabaseDeletionDate"></a>

```typescript
public readonly sourceDatabaseDeletionDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#source_database_deletion_date SqlDatabase#source_database_deletion_date}.

---

##### `sourceDatabaseId`<sup>Optional</sup> <a name="sourceDatabaseId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.sourceDatabaseId"></a>

```typescript
public readonly sourceDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#source_database_id SqlDatabase#source_database_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#tags SqlDatabase#tags}.

---

##### `threatDetectionPolicy`<sup>Optional</sup> <a name="threatDetectionPolicy" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.threatDetectionPolicy"></a>

```typescript
public readonly threatDetectionPolicy: SqlDatabaseThreatDetectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a>

threat_detection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#threat_detection_policy SqlDatabase#threat_detection_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SqlDatabaseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#timeouts SqlDatabase#timeouts}

---

##### `zoneRedundant`<sup>Optional</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.zoneRedundant"></a>

```typescript
public readonly zoneRedundant: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#zone_redundant SqlDatabase#zone_redundant}.

---

### SqlDatabaseImport <a name="SqlDatabaseImport" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.Initializer"></a>

```typescript
import { sqlDatabase } from '@cdktf/provider-azurerm'

const sqlDatabaseImport: sqlDatabase.SqlDatabaseImport = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#administrator_login SqlDatabase#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#administrator_login_password SqlDatabase#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#authentication_type SqlDatabase#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.storageKey">storageKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#storage_key SqlDatabase#storage_key}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.storageKeyType">storageKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#storage_key_type SqlDatabase#storage_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.storageUri">storageUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#storage_uri SqlDatabase#storage_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.operationMode">operationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#operation_mode SqlDatabase#operation_mode}. |

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#administrator_login SqlDatabase#administrator_login}.

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.administratorLoginPassword"></a>

```typescript
public readonly administratorLoginPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#administrator_login_password SqlDatabase#administrator_login_password}.

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#authentication_type SqlDatabase#authentication_type}.

---

##### `storageKey`<sup>Required</sup> <a name="storageKey" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.storageKey"></a>

```typescript
public readonly storageKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#storage_key SqlDatabase#storage_key}.

---

##### `storageKeyType`<sup>Required</sup> <a name="storageKeyType" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.storageKeyType"></a>

```typescript
public readonly storageKeyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#storage_key_type SqlDatabase#storage_key_type}.

---

##### `storageUri`<sup>Required</sup> <a name="storageUri" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.storageUri"></a>

```typescript
public readonly storageUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#storage_uri SqlDatabase#storage_uri}.

---

##### `operationMode`<sup>Optional</sup> <a name="operationMode" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.operationMode"></a>

```typescript
public readonly operationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#operation_mode SqlDatabase#operation_mode}.

---

### SqlDatabaseThreatDetectionPolicy <a name="SqlDatabaseThreatDetectionPolicy" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.Initializer"></a>

```typescript
import { sqlDatabase } from '@cdktf/provider-azurerm'

const sqlDatabaseThreatDetectionPolicy: sqlDatabase.SqlDatabaseThreatDetectionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.disabledAlerts">disabledAlerts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#disabled_alerts SqlDatabase#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.emailAccountAdmins">emailAccountAdmins</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#email_account_admins SqlDatabase#email_account_admins}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#email_addresses SqlDatabase#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.retentionDays">retentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#retention_days SqlDatabase#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#state SqlDatabase#state}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#storage_account_access_key SqlDatabase#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#storage_endpoint SqlDatabase#storage_endpoint}. |

---

##### `disabledAlerts`<sup>Optional</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.disabledAlerts"></a>

```typescript
public readonly disabledAlerts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#disabled_alerts SqlDatabase#disabled_alerts}.

---

##### `emailAccountAdmins`<sup>Optional</sup> <a name="emailAccountAdmins" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.emailAccountAdmins"></a>

```typescript
public readonly emailAccountAdmins: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#email_account_admins SqlDatabase#email_account_admins}.

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#email_addresses SqlDatabase#email_addresses}.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#retention_days SqlDatabase#retention_days}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#state SqlDatabase#state}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#storage_account_access_key SqlDatabase#storage_account_access_key}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#storage_endpoint SqlDatabase#storage_endpoint}.

---

### SqlDatabaseTimeouts <a name="SqlDatabaseTimeouts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.Initializer"></a>

```typescript
import { sqlDatabase } from '@cdktf/provider-azurerm'

const sqlDatabaseTimeouts: sqlDatabase.SqlDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#create SqlDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#delete SqlDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#read SqlDatabase#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#update SqlDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#create SqlDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#delete SqlDatabase#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#read SqlDatabase#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/sql_database#update SqlDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlDatabaseImportOutputReference <a name="SqlDatabaseImportOutputReference" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.Initializer"></a>

```typescript
import { sqlDatabase } from '@cdktf/provider-azurerm'

new sqlDatabase.SqlDatabaseImportOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.resetOperationMode">resetOperationMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperationMode` <a name="resetOperationMode" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.resetOperationMode"></a>

```typescript
public resetOperationMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLoginInput">administratorLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLoginPasswordInput">administratorLoginPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.operationModeInput">operationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKeyInput">storageKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKeyTypeInput">storageKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageUriInput">storageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.operationMode">operationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKey">storageKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKeyType">storageKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageUri">storageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `administratorLoginInput`<sup>Optional</sup> <a name="administratorLoginInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLoginInput"></a>

```typescript
public readonly administratorLoginInput: string;
```

- *Type:* string

---

##### `administratorLoginPasswordInput`<sup>Optional</sup> <a name="administratorLoginPasswordInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLoginPasswordInput"></a>

```typescript
public readonly administratorLoginPasswordInput: string;
```

- *Type:* string

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `operationModeInput`<sup>Optional</sup> <a name="operationModeInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.operationModeInput"></a>

```typescript
public readonly operationModeInput: string;
```

- *Type:* string

---

##### `storageKeyInput`<sup>Optional</sup> <a name="storageKeyInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKeyInput"></a>

```typescript
public readonly storageKeyInput: string;
```

- *Type:* string

---

##### `storageKeyTypeInput`<sup>Optional</sup> <a name="storageKeyTypeInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKeyTypeInput"></a>

```typescript
public readonly storageKeyTypeInput: string;
```

- *Type:* string

---

##### `storageUriInput`<sup>Optional</sup> <a name="storageUriInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageUriInput"></a>

```typescript
public readonly storageUriInput: string;
```

- *Type:* string

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLoginPassword"></a>

```typescript
public readonly administratorLoginPassword: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `operationMode`<sup>Required</sup> <a name="operationMode" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.operationMode"></a>

```typescript
public readonly operationMode: string;
```

- *Type:* string

---

##### `storageKey`<sup>Required</sup> <a name="storageKey" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKey"></a>

```typescript
public readonly storageKey: string;
```

- *Type:* string

---

##### `storageKeyType`<sup>Required</sup> <a name="storageKeyType" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKeyType"></a>

```typescript
public readonly storageKeyType: string;
```

- *Type:* string

---

##### `storageUri`<sup>Required</sup> <a name="storageUri" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageUri"></a>

```typescript
public readonly storageUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseImport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a>

---


### SqlDatabaseThreatDetectionPolicyOutputReference <a name="SqlDatabaseThreatDetectionPolicyOutputReference" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.Initializer"></a>

```typescript
import { sqlDatabase } from '@cdktf/provider-azurerm'

new sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetDisabledAlerts">resetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAccountAdmins">resetEmailAccountAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabledAlerts` <a name="resetDisabledAlerts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetDisabledAlerts"></a>

```typescript
public resetDisabledAlerts(): void
```

##### `resetEmailAccountAdmins` <a name="resetEmailAccountAdmins" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAccountAdmins"></a>

```typescript
public resetEmailAccountAdmins(): void
```

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAddresses"></a>

```typescript
public resetEmailAddresses(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey"></a>

```typescript
public resetStorageAccountAccessKey(): void
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetStorageEndpoint"></a>

```typescript
public resetStorageEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlertsInput">disabledAlertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput">emailAccountAdminsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpointInput">storageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlerts">disabledAlerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdmins">emailAccountAdmins</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledAlertsInput`<sup>Optional</sup> <a name="disabledAlertsInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlertsInput"></a>

```typescript
public readonly disabledAlertsInput: string[];
```

- *Type:* string[]

---

##### `emailAccountAdminsInput`<sup>Optional</sup> <a name="emailAccountAdminsInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput"></a>

```typescript
public readonly emailAccountAdminsInput: string;
```

- *Type:* string

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddressesInput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* string[]

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput"></a>

```typescript
public readonly storageAccountAccessKeyInput: string;
```

- *Type:* string

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpointInput"></a>

```typescript
public readonly storageEndpointInput: string;
```

- *Type:* string

---

##### `disabledAlerts`<sup>Required</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlerts"></a>

```typescript
public readonly disabledAlerts: string[];
```

- *Type:* string[]

---

##### `emailAccountAdmins`<sup>Required</sup> <a name="emailAccountAdmins" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdmins"></a>

```typescript
public readonly emailAccountAdmins: string;
```

- *Type:* string

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseThreatDetectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a>

---


### SqlDatabaseTimeoutsOutputReference <a name="SqlDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { sqlDatabase } from '@cdktf/provider-azurerm'

new sqlDatabase.SqlDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a>

---



