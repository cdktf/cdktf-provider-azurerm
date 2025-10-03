# `mssqlManagedInstanceStartStopSchedule` Submodule <a name="`mssqlManagedInstanceStartStopSchedule` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstanceStartStopSchedule <a name="MssqlManagedInstanceStartStopSchedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule azurerm_mssql_managed_instance_start_stop_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer"></a>

```typescript
import { mssqlManagedInstanceStartStopSchedule } from '@cdktf/provider-azurerm'

new mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule(scope: Construct, id: string, config: MssqlManagedInstanceStartStopScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig">MssqlManagedInstanceStartStopScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig">MssqlManagedInstanceStartStopScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimezoneId">resetTimezoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putSchedule"></a>

```typescript
public putSchedule(value: IResolvable | MssqlManagedInstanceStartStopScheduleSchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putSchedule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlManagedInstanceStartStopScheduleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimezoneId` <a name="resetTimezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimezoneId"></a>

```typescript
public resetTimezoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlManagedInstanceStartStopSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isConstruct"></a>

```typescript
import { mssqlManagedInstanceStartStopSchedule } from '@cdktf/provider-azurerm'

mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformElement"></a>

```typescript
import { mssqlManagedInstanceStartStopSchedule } from '@cdktf/provider-azurerm'

mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformResource"></a>

```typescript
import { mssqlManagedInstanceStartStopSchedule } from '@cdktf/provider-azurerm'

mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport"></a>

```typescript
import { mssqlManagedInstanceStartStopSchedule } from '@cdktf/provider-azurerm'

mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MssqlManagedInstanceStartStopSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlManagedInstanceStartStopSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlManagedInstanceStartStopSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlManagedInstanceStartStopSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextExecutionTime">nextExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextRunAction">nextRunAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList">MssqlManagedInstanceStartStopScheduleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference">MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.scheduleInput">scheduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneIdInput">timezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneId">timezoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `nextExecutionTime`<sup>Required</sup> <a name="nextExecutionTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextExecutionTime"></a>

```typescript
public readonly nextExecutionTime: string;
```

- *Type:* string

---

##### `nextRunAction`<sup>Required</sup> <a name="nextRunAction" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextRunAction"></a>

```typescript
public readonly nextRunAction: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.schedule"></a>

```typescript
public readonly schedule: MssqlManagedInstanceStartStopScheduleScheduleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList">MssqlManagedInstanceStartStopScheduleScheduleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference">MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | MssqlManagedInstanceStartStopScheduleSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlManagedInstanceStartStopScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a>

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneIdInput"></a>

```typescript
public readonly timezoneIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceStartStopScheduleConfig <a name="MssqlManagedInstanceStartStopScheduleConfig" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.Initializer"></a>

```typescript
import { mssqlManagedInstanceStartStopSchedule } from '@cdktf/provider-azurerm'

const mssqlManagedInstanceStartStopScheduleConfig: mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#managed_instance_id MssqlManagedInstanceStartStopSchedule#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.schedule">schedule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>[]</code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#description MssqlManagedInstanceStartStopSchedule#description}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#id MssqlManagedInstanceStartStopSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timezoneId">timezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#timezone_id MssqlManagedInstanceStartStopSchedule#timezone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#managed_instance_id MssqlManagedInstanceStartStopSchedule#managed_instance_id}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.schedule"></a>

```typescript
public readonly schedule: IResolvable | MssqlManagedInstanceStartStopScheduleSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>[]

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#schedule MssqlManagedInstanceStartStopSchedule#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#description MssqlManagedInstanceStartStopSchedule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#id MssqlManagedInstanceStartStopSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlManagedInstanceStartStopScheduleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#timeouts MssqlManagedInstanceStartStopSchedule#timeouts}

---

##### `timezoneId`<sup>Optional</sup> <a name="timezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#timezone_id MssqlManagedInstanceStartStopSchedule#timezone_id}.

---

### MssqlManagedInstanceStartStopScheduleSchedule <a name="MssqlManagedInstanceStartStopScheduleSchedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.Initializer"></a>

```typescript
import { mssqlManagedInstanceStartStopSchedule } from '@cdktf/provider-azurerm'

const mssqlManagedInstanceStartStopScheduleSchedule: mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startDay">startDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#start_day MssqlManagedInstanceStartStopSchedule#start_day}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#start_time MssqlManagedInstanceStartStopSchedule#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopDay">stopDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#stop_day MssqlManagedInstanceStartStopSchedule#stop_day}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopTime">stopTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#stop_time MssqlManagedInstanceStartStopSchedule#stop_time}. |

---

##### `startDay`<sup>Required</sup> <a name="startDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startDay"></a>

```typescript
public readonly startDay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#start_day MssqlManagedInstanceStartStopSchedule#start_day}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#start_time MssqlManagedInstanceStartStopSchedule#start_time}.

---

##### `stopDay`<sup>Required</sup> <a name="stopDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopDay"></a>

```typescript
public readonly stopDay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#stop_day MssqlManagedInstanceStartStopSchedule#stop_day}.

---

##### `stopTime`<sup>Required</sup> <a name="stopTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopTime"></a>

```typescript
public readonly stopTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#stop_time MssqlManagedInstanceStartStopSchedule#stop_time}.

---

### MssqlManagedInstanceStartStopScheduleTimeouts <a name="MssqlManagedInstanceStartStopScheduleTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.Initializer"></a>

```typescript
import { mssqlManagedInstanceStartStopSchedule } from '@cdktf/provider-azurerm'

const mssqlManagedInstanceStartStopScheduleTimeouts: mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#create MssqlManagedInstanceStartStopSchedule#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#delete MssqlManagedInstanceStartStopSchedule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#read MssqlManagedInstanceStartStopSchedule#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#update MssqlManagedInstanceStartStopSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#create MssqlManagedInstanceStartStopSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#delete MssqlManagedInstanceStartStopSchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#read MssqlManagedInstanceStartStopSchedule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#update MssqlManagedInstanceStartStopSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceStartStopScheduleScheduleList <a name="MssqlManagedInstanceStartStopScheduleScheduleList" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer"></a>

```typescript
import { mssqlManagedInstanceStartStopSchedule } from '@cdktf/provider-azurerm'

new mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.get"></a>

```typescript
public get(index: number): MssqlManagedInstanceStartStopScheduleScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlManagedInstanceStartStopScheduleSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>[]

---


### MssqlManagedInstanceStartStopScheduleScheduleOutputReference <a name="MssqlManagedInstanceStartStopScheduleScheduleOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer"></a>

```typescript
import { mssqlManagedInstanceStartStopSchedule } from '@cdktf/provider-azurerm'

new mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDayInput">startDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDayInput">stopDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTimeInput">stopTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDay">startDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDay">stopDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTime">stopTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startDayInput`<sup>Optional</sup> <a name="startDayInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDayInput"></a>

```typescript
public readonly startDayInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `stopDayInput`<sup>Optional</sup> <a name="stopDayInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDayInput"></a>

```typescript
public readonly stopDayInput: string;
```

- *Type:* string

---

##### `stopTimeInput`<sup>Optional</sup> <a name="stopTimeInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTimeInput"></a>

```typescript
public readonly stopTimeInput: string;
```

- *Type:* string

---

##### `startDay`<sup>Required</sup> <a name="startDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDay"></a>

```typescript
public readonly startDay: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `stopDay`<sup>Required</sup> <a name="stopDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDay"></a>

```typescript
public readonly stopDay: string;
```

- *Type:* string

---

##### `stopTime`<sup>Required</sup> <a name="stopTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTime"></a>

```typescript
public readonly stopTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlManagedInstanceStartStopScheduleSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>

---


### MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference <a name="MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlManagedInstanceStartStopSchedule } from '@cdktf/provider-azurerm'

new mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlManagedInstanceStartStopScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a>

---



