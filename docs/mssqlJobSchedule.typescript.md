# `mssqlJobSchedule` Submodule <a name="`mssqlJobSchedule` Submodule" id="@cdktf/provider-azurerm.mssqlJobSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlJobSchedule <a name="MssqlJobSchedule" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule azurerm_mssql_job_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.Initializer"></a>

```typescript
import { mssqlJobSchedule } from '@cdktf/provider-azurerm'

new mssqlJobSchedule.MssqlJobSchedule(scope: Construct, id: string, config: MssqlJobScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig">MssqlJobScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig">MssqlJobScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlJobScheduleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts">MssqlJobScheduleTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlJobSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.isConstruct"></a>

```typescript
import { mssqlJobSchedule } from '@cdktf/provider-azurerm'

mssqlJobSchedule.MssqlJobSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.isTerraformElement"></a>

```typescript
import { mssqlJobSchedule } from '@cdktf/provider-azurerm'

mssqlJobSchedule.MssqlJobSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.isTerraformResource"></a>

```typescript
import { mssqlJobSchedule } from '@cdktf/provider-azurerm'

mssqlJobSchedule.MssqlJobSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.generateConfigForImport"></a>

```typescript
import { mssqlJobSchedule } from '@cdktf/provider-azurerm'

mssqlJobSchedule.MssqlJobSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MssqlJobSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlJobSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlJobSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlJobSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference">MssqlJobScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.jobIdInput">jobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts">MssqlJobScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlJobScheduleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference">MssqlJobScheduleTimeoutsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlJobScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts">MssqlJobScheduleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlJobScheduleConfig <a name="MssqlJobScheduleConfig" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.Initializer"></a>

```typescript
import { mssqlJobSchedule } from '@cdktf/provider-azurerm'

const mssqlJobScheduleConfig: mssqlJobSchedule.MssqlJobScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.jobId">jobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#job_id MssqlJobSchedule#job_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#type MssqlJobSchedule#type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#enabled MssqlJobSchedule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#end_time MssqlJobSchedule#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#id MssqlJobSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.interval">interval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#interval MssqlJobSchedule#interval}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#start_time MssqlJobSchedule#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts">MssqlJobScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#job_id MssqlJobSchedule#job_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#type MssqlJobSchedule#type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#enabled MssqlJobSchedule#enabled}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#end_time MssqlJobSchedule#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#id MssqlJobSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#interval MssqlJobSchedule#interval}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#start_time MssqlJobSchedule#start_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlJobScheduleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts">MssqlJobScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#timeouts MssqlJobSchedule#timeouts}

---

### MssqlJobScheduleTimeouts <a name="MssqlJobScheduleTimeouts" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts.Initializer"></a>

```typescript
import { mssqlJobSchedule } from '@cdktf/provider-azurerm'

const mssqlJobScheduleTimeouts: mssqlJobSchedule.MssqlJobScheduleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#create MssqlJobSchedule#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#delete MssqlJobSchedule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#read MssqlJobSchedule#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#update MssqlJobSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#create MssqlJobSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#delete MssqlJobSchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#read MssqlJobSchedule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_schedule#update MssqlJobSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlJobScheduleTimeoutsOutputReference <a name="MssqlJobScheduleTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlJobSchedule } from '@cdktf/provider-azurerm'

new mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts">MssqlJobScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlJobScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlJobSchedule.MssqlJobScheduleTimeouts">MssqlJobScheduleTimeouts</a>

---



