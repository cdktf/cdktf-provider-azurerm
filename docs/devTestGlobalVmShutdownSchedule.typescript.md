# `devTestGlobalVmShutdownSchedule` Submodule <a name="`devTestGlobalVmShutdownSchedule` Submodule" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevTestGlobalVmShutdownSchedule <a name="DevTestGlobalVmShutdownSchedule" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule azurerm_dev_test_global_vm_shutdown_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer"></a>

```typescript
import { devTestGlobalVmShutdownSchedule } from '@cdktf/provider-azurerm'

new devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule(scope: Construct, id: string, config: DevTestGlobalVmShutdownScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig">DevTestGlobalVmShutdownScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig">DevTestGlobalVmShutdownScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.putNotificationSettings">putNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotificationSettings` <a name="putNotificationSettings" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.putNotificationSettings"></a>

```typescript
public putNotificationSettings(value: DevTestGlobalVmShutdownScheduleNotificationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.putTimeouts"></a>

```typescript
public putTimeouts(value: DevTestGlobalVmShutdownScheduleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevTestGlobalVmShutdownSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isConstruct"></a>

```typescript
import { devTestGlobalVmShutdownSchedule } from '@cdktf/provider-azurerm'

devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isTerraformElement"></a>

```typescript
import { devTestGlobalVmShutdownSchedule } from '@cdktf/provider-azurerm'

devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isTerraformResource"></a>

```typescript
import { devTestGlobalVmShutdownSchedule } from '@cdktf/provider-azurerm'

devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.generateConfigForImport"></a>

```typescript
import { devTestGlobalVmShutdownSchedule } from '@cdktf/provider-azurerm'

devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevTestGlobalVmShutdownSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevTestGlobalVmShutdownSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevTestGlobalVmShutdownSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevTestGlobalVmShutdownSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference">DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference">DevTestGlobalVmShutdownScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.dailyRecurrenceTimeInput">dailyRecurrenceTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.notificationSettingsInput">notificationSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.dailyRecurrenceTime">dailyRecurrenceTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference">DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timeouts"></a>

```typescript
public readonly timeouts: DevTestGlobalVmShutdownScheduleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference">DevTestGlobalVmShutdownScheduleTimeoutsOutputReference</a>

---

##### `dailyRecurrenceTimeInput`<sup>Optional</sup> <a name="dailyRecurrenceTimeInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.dailyRecurrenceTimeInput"></a>

```typescript
public readonly dailyRecurrenceTimeInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `notificationSettingsInput`<sup>Optional</sup> <a name="notificationSettingsInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.notificationSettingsInput"></a>

```typescript
public readonly notificationSettingsInput: DevTestGlobalVmShutdownScheduleNotificationSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DevTestGlobalVmShutdownScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.virtualMachineIdInput"></a>

```typescript
public readonly virtualMachineIdInput: string;
```

- *Type:* string

---

##### `dailyRecurrenceTime`<sup>Required</sup> <a name="dailyRecurrenceTime" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.dailyRecurrenceTime"></a>

```typescript
public readonly dailyRecurrenceTime: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevTestGlobalVmShutdownScheduleConfig <a name="DevTestGlobalVmShutdownScheduleConfig" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.Initializer"></a>

```typescript
import { devTestGlobalVmShutdownSchedule } from '@cdktf/provider-azurerm'

const devTestGlobalVmShutdownScheduleConfig: devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.dailyRecurrenceTime">dailyRecurrenceTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#daily_recurrence_time DevTestGlobalVmShutdownSchedule#daily_recurrence_time}. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#location DevTestGlobalVmShutdownSchedule#location}. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#timezone DevTestGlobalVmShutdownSchedule#timezone}. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#virtual_machine_id DevTestGlobalVmShutdownSchedule#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#enabled DevTestGlobalVmShutdownSchedule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#id DevTestGlobalVmShutdownSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#tags DevTestGlobalVmShutdownSchedule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dailyRecurrenceTime`<sup>Required</sup> <a name="dailyRecurrenceTime" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.dailyRecurrenceTime"></a>

```typescript
public readonly dailyRecurrenceTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#daily_recurrence_time DevTestGlobalVmShutdownSchedule#daily_recurrence_time}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#location DevTestGlobalVmShutdownSchedule#location}.

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: DevTestGlobalVmShutdownScheduleNotificationSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#notification_settings DevTestGlobalVmShutdownSchedule#notification_settings}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#timezone DevTestGlobalVmShutdownSchedule#timezone}.

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#virtual_machine_id DevTestGlobalVmShutdownSchedule#virtual_machine_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#enabled DevTestGlobalVmShutdownSchedule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#id DevTestGlobalVmShutdownSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#tags DevTestGlobalVmShutdownSchedule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DevTestGlobalVmShutdownScheduleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#timeouts DevTestGlobalVmShutdownSchedule#timeouts}

---

### DevTestGlobalVmShutdownScheduleNotificationSettings <a name="DevTestGlobalVmShutdownScheduleNotificationSettings" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.Initializer"></a>

```typescript
import { devTestGlobalVmShutdownSchedule } from '@cdktf/provider-azurerm'

const devTestGlobalVmShutdownScheduleNotificationSettings: devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#enabled DevTestGlobalVmShutdownSchedule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#email DevTestGlobalVmShutdownSchedule#email}. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.timeInMinutes">timeInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#time_in_minutes DevTestGlobalVmShutdownSchedule#time_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.webhookUrl">webhookUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#webhook_url DevTestGlobalVmShutdownSchedule#webhook_url}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#enabled DevTestGlobalVmShutdownSchedule#enabled}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#email DevTestGlobalVmShutdownSchedule#email}.

---

##### `timeInMinutes`<sup>Optional</sup> <a name="timeInMinutes" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.timeInMinutes"></a>

```typescript
public readonly timeInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#time_in_minutes DevTestGlobalVmShutdownSchedule#time_in_minutes}.

---

##### `webhookUrl`<sup>Optional</sup> <a name="webhookUrl" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.webhookUrl"></a>

```typescript
public readonly webhookUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#webhook_url DevTestGlobalVmShutdownSchedule#webhook_url}.

---

### DevTestGlobalVmShutdownScheduleTimeouts <a name="DevTestGlobalVmShutdownScheduleTimeouts" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.Initializer"></a>

```typescript
import { devTestGlobalVmShutdownSchedule } from '@cdktf/provider-azurerm'

const devTestGlobalVmShutdownScheduleTimeouts: devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#create DevTestGlobalVmShutdownSchedule#create}. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#delete DevTestGlobalVmShutdownSchedule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#read DevTestGlobalVmShutdownSchedule#read}. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#update DevTestGlobalVmShutdownSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#create DevTestGlobalVmShutdownSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#delete DevTestGlobalVmShutdownSchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#read DevTestGlobalVmShutdownSchedule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/dev_test_global_vm_shutdown_schedule#update DevTestGlobalVmShutdownSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference <a name="DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.Initializer"></a>

```typescript
import { devTestGlobalVmShutdownSchedule } from '@cdktf/provider-azurerm'

new devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resetTimeInMinutes">resetTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resetWebhookUrl">resetWebhookUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetTimeInMinutes` <a name="resetTimeInMinutes" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resetTimeInMinutes"></a>

```typescript
public resetTimeInMinutes(): void
```

##### `resetWebhookUrl` <a name="resetWebhookUrl" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resetWebhookUrl"></a>

```typescript
public resetWebhookUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.timeInMinutesInput">timeInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.webhookUrlInput">webhookUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.timeInMinutes">timeInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.webhookUrl">webhookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeInMinutesInput`<sup>Optional</sup> <a name="timeInMinutesInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.timeInMinutesInput"></a>

```typescript
public readonly timeInMinutesInput: number;
```

- *Type:* number

---

##### `webhookUrlInput`<sup>Optional</sup> <a name="webhookUrlInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.webhookUrlInput"></a>

```typescript
public readonly webhookUrlInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeInMinutes`<sup>Required</sup> <a name="timeInMinutes" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.timeInMinutes"></a>

```typescript
public readonly timeInMinutes: number;
```

- *Type:* number

---

##### `webhookUrl`<sup>Required</sup> <a name="webhookUrl" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.webhookUrl"></a>

```typescript
public readonly webhookUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevTestGlobalVmShutdownScheduleNotificationSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a>

---


### DevTestGlobalVmShutdownScheduleTimeoutsOutputReference <a name="DevTestGlobalVmShutdownScheduleTimeoutsOutputReference" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.Initializer"></a>

```typescript
import { devTestGlobalVmShutdownSchedule } from '@cdktf/provider-azurerm'

new devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevTestGlobalVmShutdownScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a>

---



