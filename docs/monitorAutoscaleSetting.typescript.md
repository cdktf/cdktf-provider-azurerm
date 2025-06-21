# `monitorAutoscaleSetting` Submodule <a name="`monitorAutoscaleSetting` Submodule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAutoscaleSetting <a name="MonitorAutoscaleSetting" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting azurerm_monitor_autoscale_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSetting(scope: Construct, id: string, config: MonitorAutoscaleSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig">MonitorAutoscaleSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig">MonitorAutoscaleSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putNotification">putNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putPredictive">putPredictive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putProfile">putProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetNotification">resetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetPredictive">resetPredictive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotification` <a name="putNotification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putNotification"></a>

```typescript
public putNotification(value: MonitorAutoscaleSettingNotification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a>

---

##### `putPredictive` <a name="putPredictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putPredictive"></a>

```typescript
public putPredictive(value: MonitorAutoscaleSettingPredictive): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putPredictive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a>

---

##### `putProfile` <a name="putProfile" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putProfile"></a>

```typescript
public putProfile(value: IResolvable | MonitorAutoscaleSettingProfile[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putProfile.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitorAutoscaleSettingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotification` <a name="resetNotification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetNotification"></a>

```typescript
public resetNotification(): void
```

##### `resetPredictive` <a name="resetPredictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetPredictive"></a>

```typescript
public resetPredictive(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorAutoscaleSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isConstruct"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

monitorAutoscaleSetting.MonitorAutoscaleSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformElement"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformResource"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MonitorAutoscaleSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorAutoscaleSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorAutoscaleSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorAutoscaleSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference">MonitorAutoscaleSettingNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.predictive">predictive</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference">MonitorAutoscaleSettingPredictiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.profile">profile</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList">MonitorAutoscaleSettingProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference">MonitorAutoscaleSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.notificationInput">notificationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.predictiveInput">predictiveInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.profileInput">profileInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.notification"></a>

```typescript
public readonly notification: MonitorAutoscaleSettingNotificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference">MonitorAutoscaleSettingNotificationOutputReference</a>

---

##### `predictive`<sup>Required</sup> <a name="predictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.predictive"></a>

```typescript
public readonly predictive: MonitorAutoscaleSettingPredictiveOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference">MonitorAutoscaleSettingPredictiveOutputReference</a>

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.profile"></a>

```typescript
public readonly profile: MonitorAutoscaleSettingProfileList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList">MonitorAutoscaleSettingProfileList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorAutoscaleSettingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference">MonitorAutoscaleSettingTimeoutsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationInput`<sup>Optional</sup> <a name="notificationInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.notificationInput"></a>

```typescript
public readonly notificationInput: MonitorAutoscaleSettingNotification;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a>

---

##### `predictiveInput`<sup>Optional</sup> <a name="predictiveInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.predictiveInput"></a>

```typescript
public readonly predictiveInput: MonitorAutoscaleSettingPredictive;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a>

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.profileInput"></a>

```typescript
public readonly profileInput: IResolvable | MonitorAutoscaleSettingProfile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>[]

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.targetResourceIdInput"></a>

```typescript
public readonly targetResourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MonitorAutoscaleSettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAutoscaleSettingConfig <a name="MonitorAutoscaleSettingConfig" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

const monitorAutoscaleSettingConfig: monitorAutoscaleSetting.MonitorAutoscaleSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#location MonitorAutoscaleSetting#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.profile">profile</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>[]</code> | profile block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#resource_group_name MonitorAutoscaleSetting#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#target_resource_id MonitorAutoscaleSetting#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#enabled MonitorAutoscaleSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#id MonitorAutoscaleSetting#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a></code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.predictive">predictive</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a></code> | predictive block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#tags MonitorAutoscaleSetting#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#location MonitorAutoscaleSetting#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}.

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.profile"></a>

```typescript
public readonly profile: IResolvable | MonitorAutoscaleSettingProfile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>[]

profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#profile MonitorAutoscaleSetting#profile}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#resource_group_name MonitorAutoscaleSetting#resource_group_name}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#target_resource_id MonitorAutoscaleSetting#target_resource_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#enabled MonitorAutoscaleSetting#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#id MonitorAutoscaleSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.notification"></a>

```typescript
public readonly notification: MonitorAutoscaleSettingNotification;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a>

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#notification MonitorAutoscaleSetting#notification}

---

##### `predictive`<sup>Optional</sup> <a name="predictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.predictive"></a>

```typescript
public readonly predictive: MonitorAutoscaleSettingPredictive;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a>

predictive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#predictive MonitorAutoscaleSetting#predictive}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#tags MonitorAutoscaleSetting#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorAutoscaleSettingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#timeouts MonitorAutoscaleSetting#timeouts}

---

### MonitorAutoscaleSettingNotification <a name="MonitorAutoscaleSettingNotification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

const monitorAutoscaleSettingNotification: monitorAutoscaleSetting.MonitorAutoscaleSettingNotification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.property.email">email</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.property.webhook">webhook</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>[]</code> | webhook block. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.property.email"></a>

```typescript
public readonly email: MonitorAutoscaleSettingNotificationEmail;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#email MonitorAutoscaleSetting#email}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.property.webhook"></a>

```typescript
public readonly webhook: IResolvable | MonitorAutoscaleSettingNotificationWebhook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>[]

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#webhook MonitorAutoscaleSetting#webhook}

---

### MonitorAutoscaleSettingNotificationEmail <a name="MonitorAutoscaleSettingNotificationEmail" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

const monitorAutoscaleSettingNotificationEmail: monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.customEmails">customEmails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#custom_emails MonitorAutoscaleSetting#custom_emails}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.sendToSubscriptionAdministrator">sendToSubscriptionAdministrator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#send_to_subscription_administrator MonitorAutoscaleSetting#send_to_subscription_administrator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.sendToSubscriptionCoAdministrator">sendToSubscriptionCoAdministrator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#send_to_subscription_co_administrator MonitorAutoscaleSetting#send_to_subscription_co_administrator}. |

---

##### `customEmails`<sup>Optional</sup> <a name="customEmails" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.customEmails"></a>

```typescript
public readonly customEmails: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#custom_emails MonitorAutoscaleSetting#custom_emails}.

---

##### `sendToSubscriptionAdministrator`<sup>Optional</sup> <a name="sendToSubscriptionAdministrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.sendToSubscriptionAdministrator"></a>

```typescript
public readonly sendToSubscriptionAdministrator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#send_to_subscription_administrator MonitorAutoscaleSetting#send_to_subscription_administrator}.

---

##### `sendToSubscriptionCoAdministrator`<sup>Optional</sup> <a name="sendToSubscriptionCoAdministrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.sendToSubscriptionCoAdministrator"></a>

```typescript
public readonly sendToSubscriptionCoAdministrator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#send_to_subscription_co_administrator MonitorAutoscaleSetting#send_to_subscription_co_administrator}.

---

### MonitorAutoscaleSettingNotificationWebhook <a name="MonitorAutoscaleSettingNotificationWebhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

const monitorAutoscaleSettingNotificationWebhook: monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.property.serviceUri">serviceUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#service_uri MonitorAutoscaleSetting#service_uri}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#properties MonitorAutoscaleSetting#properties}. |

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.property.serviceUri"></a>

```typescript
public readonly serviceUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#service_uri MonitorAutoscaleSetting#service_uri}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#properties MonitorAutoscaleSetting#properties}.

---

### MonitorAutoscaleSettingPredictive <a name="MonitorAutoscaleSettingPredictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

const monitorAutoscaleSettingPredictive: monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.property.scaleMode">scaleMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#scale_mode MonitorAutoscaleSetting#scale_mode}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.property.lookAheadTime">lookAheadTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#look_ahead_time MonitorAutoscaleSetting#look_ahead_time}. |

---

##### `scaleMode`<sup>Required</sup> <a name="scaleMode" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.property.scaleMode"></a>

```typescript
public readonly scaleMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#scale_mode MonitorAutoscaleSetting#scale_mode}.

---

##### `lookAheadTime`<sup>Optional</sup> <a name="lookAheadTime" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.property.lookAheadTime"></a>

```typescript
public readonly lookAheadTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#look_ahead_time MonitorAutoscaleSetting#look_ahead_time}.

---

### MonitorAutoscaleSettingProfile <a name="MonitorAutoscaleSettingProfile" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

const monitorAutoscaleSettingProfile: monitorAutoscaleSetting.MonitorAutoscaleSettingProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.fixedDate">fixedDate</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a></code> | fixed_date block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>[]</code> | rule block. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.capacity"></a>

```typescript
public readonly capacity: MonitorAutoscaleSettingProfileCapacity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#capacity MonitorAutoscaleSetting#capacity}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}.

---

##### `fixedDate`<sup>Optional</sup> <a name="fixedDate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.fixedDate"></a>

```typescript
public readonly fixedDate: MonitorAutoscaleSettingProfileFixedDate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a>

fixed_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#fixed_date MonitorAutoscaleSetting#fixed_date}

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.recurrence"></a>

```typescript
public readonly recurrence: MonitorAutoscaleSettingProfileRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#recurrence MonitorAutoscaleSetting#recurrence}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.rule"></a>

```typescript
public readonly rule: IResolvable | MonitorAutoscaleSettingProfileRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#rule MonitorAutoscaleSetting#rule}

---

### MonitorAutoscaleSettingProfileCapacity <a name="MonitorAutoscaleSettingProfileCapacity" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

const monitorAutoscaleSettingProfileCapacity: monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.default">default</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#default MonitorAutoscaleSetting#default}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.maximum">maximum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#maximum MonitorAutoscaleSetting#maximum}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.minimum">minimum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#minimum MonitorAutoscaleSetting#minimum}. |

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.default"></a>

```typescript
public readonly default: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#default MonitorAutoscaleSetting#default}.

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#maximum MonitorAutoscaleSetting#maximum}.

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#minimum MonitorAutoscaleSetting#minimum}.

---

### MonitorAutoscaleSettingProfileFixedDate <a name="MonitorAutoscaleSettingProfileFixedDate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

const monitorAutoscaleSettingProfileFixedDate: monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.end">end</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#end MonitorAutoscaleSetting#end}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.start">start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#start MonitorAutoscaleSetting#start}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#end MonitorAutoscaleSetting#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#start MonitorAutoscaleSetting#start}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}.

---

### MonitorAutoscaleSettingProfileRecurrence <a name="MonitorAutoscaleSettingProfileRecurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

const monitorAutoscaleSettingProfileRecurrence: monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.days">days</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#days MonitorAutoscaleSetting#days}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.hours">hours</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#hours MonitorAutoscaleSetting#hours}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.minutes">minutes</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#minutes MonitorAutoscaleSetting#minutes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.days"></a>

```typescript
public readonly days: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#days MonitorAutoscaleSetting#days}.

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.hours"></a>

```typescript
public readonly hours: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#hours MonitorAutoscaleSetting#hours}.

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.minutes"></a>

```typescript
public readonly minutes: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#minutes MonitorAutoscaleSetting#minutes}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}.

---

### MonitorAutoscaleSettingProfileRule <a name="MonitorAutoscaleSettingProfileRule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

const monitorAutoscaleSettingProfileRule: monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.property.metricTrigger">metricTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a></code> | metric_trigger block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.property.scaleAction">scaleAction</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a></code> | scale_action block. |

---

##### `metricTrigger`<sup>Required</sup> <a name="metricTrigger" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.property.metricTrigger"></a>

```typescript
public readonly metricTrigger: MonitorAutoscaleSettingProfileRuleMetricTrigger;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a>

metric_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#metric_trigger MonitorAutoscaleSetting#metric_trigger}

---

##### `scaleAction`<sup>Required</sup> <a name="scaleAction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.property.scaleAction"></a>

```typescript
public readonly scaleAction: MonitorAutoscaleSettingProfileRuleScaleAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a>

scale_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#scale_action MonitorAutoscaleSetting#scale_action}

---

### MonitorAutoscaleSettingProfileRuleMetricTrigger <a name="MonitorAutoscaleSettingProfileRuleMetricTrigger" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

const monitorAutoscaleSettingProfileRuleMetricTrigger: monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#metric_name MonitorAutoscaleSetting#metric_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricResourceId">metricResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#metric_resource_id MonitorAutoscaleSetting#metric_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#statistic MonitorAutoscaleSetting#statistic}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#threshold MonitorAutoscaleSetting#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeAggregation">timeAggregation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#time_aggregation MonitorAutoscaleSetting#time_aggregation}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeGrain">timeGrain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#time_grain MonitorAutoscaleSetting#time_grain}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeWindow">timeWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#time_window MonitorAutoscaleSetting#time_window}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.dimensions">dimensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>[]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.divideByInstanceCount">divideByInstanceCount</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#divide_by_instance_count MonitorAutoscaleSetting#divide_by_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#metric_namespace MonitorAutoscaleSetting#metric_namespace}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#metric_name MonitorAutoscaleSetting#metric_name}.

---

##### `metricResourceId`<sup>Required</sup> <a name="metricResourceId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricResourceId"></a>

```typescript
public readonly metricResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#metric_resource_id MonitorAutoscaleSetting#metric_resource_id}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}.

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#statistic MonitorAutoscaleSetting#statistic}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#threshold MonitorAutoscaleSetting#threshold}.

---

##### `timeAggregation`<sup>Required</sup> <a name="timeAggregation" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeAggregation"></a>

```typescript
public readonly timeAggregation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#time_aggregation MonitorAutoscaleSetting#time_aggregation}.

---

##### `timeGrain`<sup>Required</sup> <a name="timeGrain" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeGrain"></a>

```typescript
public readonly timeGrain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#time_grain MonitorAutoscaleSetting#time_grain}.

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeWindow"></a>

```typescript
public readonly timeWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#time_window MonitorAutoscaleSetting#time_window}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>[]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#dimensions MonitorAutoscaleSetting#dimensions}

---

##### `divideByInstanceCount`<sup>Optional</sup> <a name="divideByInstanceCount" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.divideByInstanceCount"></a>

```typescript
public readonly divideByInstanceCount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#divide_by_instance_count MonitorAutoscaleSetting#divide_by_instance_count}.

---

##### `metricNamespace`<sup>Optional</sup> <a name="metricNamespace" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#metric_namespace MonitorAutoscaleSetting#metric_namespace}.

---

### MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions <a name="MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

const monitorAutoscaleSettingProfileRuleMetricTriggerDimensions: monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#values MonitorAutoscaleSetting#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#values MonitorAutoscaleSetting#values}.

---

### MonitorAutoscaleSettingProfileRuleScaleAction <a name="MonitorAutoscaleSettingProfileRuleScaleAction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

const monitorAutoscaleSettingProfileRuleScaleAction: monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.cooldown">cooldown</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#cooldown MonitorAutoscaleSetting#cooldown}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.direction">direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#direction MonitorAutoscaleSetting#direction}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#type MonitorAutoscaleSetting#type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#value MonitorAutoscaleSetting#value}. |

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.cooldown"></a>

```typescript
public readonly cooldown: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#cooldown MonitorAutoscaleSetting#cooldown}.

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#direction MonitorAutoscaleSetting#direction}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#type MonitorAutoscaleSetting#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#value MonitorAutoscaleSetting#value}.

---

### MonitorAutoscaleSettingTimeouts <a name="MonitorAutoscaleSettingTimeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

const monitorAutoscaleSettingTimeouts: monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#create MonitorAutoscaleSetting#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#delete MonitorAutoscaleSetting#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#read MonitorAutoscaleSetting#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#update MonitorAutoscaleSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#create MonitorAutoscaleSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#delete MonitorAutoscaleSetting#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#read MonitorAutoscaleSetting#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/monitor_autoscale_setting#update MonitorAutoscaleSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAutoscaleSettingNotificationEmailOutputReference <a name="MonitorAutoscaleSettingNotificationEmailOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetCustomEmails">resetCustomEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetSendToSubscriptionAdministrator">resetSendToSubscriptionAdministrator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetSendToSubscriptionCoAdministrator">resetSendToSubscriptionCoAdministrator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomEmails` <a name="resetCustomEmails" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetCustomEmails"></a>

```typescript
public resetCustomEmails(): void
```

##### `resetSendToSubscriptionAdministrator` <a name="resetSendToSubscriptionAdministrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetSendToSubscriptionAdministrator"></a>

```typescript
public resetSendToSubscriptionAdministrator(): void
```

##### `resetSendToSubscriptionCoAdministrator` <a name="resetSendToSubscriptionCoAdministrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetSendToSubscriptionCoAdministrator"></a>

```typescript
public resetSendToSubscriptionCoAdministrator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.customEmailsInput">customEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionAdministratorInput">sendToSubscriptionAdministratorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionCoAdministratorInput">sendToSubscriptionCoAdministratorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.customEmails">customEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionAdministrator">sendToSubscriptionAdministrator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionCoAdministrator">sendToSubscriptionCoAdministrator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customEmailsInput`<sup>Optional</sup> <a name="customEmailsInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.customEmailsInput"></a>

```typescript
public readonly customEmailsInput: string[];
```

- *Type:* string[]

---

##### `sendToSubscriptionAdministratorInput`<sup>Optional</sup> <a name="sendToSubscriptionAdministratorInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionAdministratorInput"></a>

```typescript
public readonly sendToSubscriptionAdministratorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendToSubscriptionCoAdministratorInput`<sup>Optional</sup> <a name="sendToSubscriptionCoAdministratorInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionCoAdministratorInput"></a>

```typescript
public readonly sendToSubscriptionCoAdministratorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customEmails`<sup>Required</sup> <a name="customEmails" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.customEmails"></a>

```typescript
public readonly customEmails: string[];
```

- *Type:* string[]

---

##### `sendToSubscriptionAdministrator`<sup>Required</sup> <a name="sendToSubscriptionAdministrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionAdministrator"></a>

```typescript
public readonly sendToSubscriptionAdministrator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendToSubscriptionCoAdministrator`<sup>Required</sup> <a name="sendToSubscriptionCoAdministrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionCoAdministrator"></a>

```typescript
public readonly sendToSubscriptionCoAdministrator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAutoscaleSettingNotificationEmail;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a>

---


### MonitorAutoscaleSettingNotificationOutputReference <a name="MonitorAutoscaleSettingNotificationOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putEmail">putEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putWebhook">putWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resetWebhook">resetWebhook</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmail` <a name="putEmail" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putEmail"></a>

```typescript
public putEmail(value: MonitorAutoscaleSettingNotificationEmail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a>

---

##### `putWebhook` <a name="putWebhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putWebhook"></a>

```typescript
public putWebhook(value: IResolvable | MonitorAutoscaleSettingNotificationWebhook[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putWebhook.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>[]

---

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetWebhook` <a name="resetWebhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resetWebhook"></a>

```typescript
public resetWebhook(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference">MonitorAutoscaleSettingNotificationEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList">MonitorAutoscaleSettingNotificationWebhookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.emailInput">emailInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.webhookInput">webhookInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.email"></a>

```typescript
public readonly email: MonitorAutoscaleSettingNotificationEmailOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference">MonitorAutoscaleSettingNotificationEmailOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.webhook"></a>

```typescript
public readonly webhook: MonitorAutoscaleSettingNotificationWebhookList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList">MonitorAutoscaleSettingNotificationWebhookList</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: MonitorAutoscaleSettingNotificationEmail;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a>

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.webhookInput"></a>

```typescript
public readonly webhookInput: IResolvable | MonitorAutoscaleSettingNotificationWebhook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAutoscaleSettingNotification;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a>

---


### MonitorAutoscaleSettingNotificationWebhookList <a name="MonitorAutoscaleSettingNotificationWebhookList" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.get"></a>

```typescript
public get(index: number): MonitorAutoscaleSettingNotificationWebhookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAutoscaleSettingNotificationWebhook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>[]

---


### MonitorAutoscaleSettingNotificationWebhookOutputReference <a name="MonitorAutoscaleSettingNotificationWebhookOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.serviceUriInput">serviceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.serviceUri">serviceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serviceUriInput`<sup>Optional</sup> <a name="serviceUriInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.serviceUriInput"></a>

```typescript
public readonly serviceUriInput: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.serviceUri"></a>

```typescript
public readonly serviceUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAutoscaleSettingNotificationWebhook;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook">MonitorAutoscaleSettingNotificationWebhook</a>

---


### MonitorAutoscaleSettingPredictiveOutputReference <a name="MonitorAutoscaleSettingPredictiveOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resetLookAheadTime">resetLookAheadTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLookAheadTime` <a name="resetLookAheadTime" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resetLookAheadTime"></a>

```typescript
public resetLookAheadTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.lookAheadTimeInput">lookAheadTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.scaleModeInput">scaleModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.lookAheadTime">lookAheadTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.scaleMode">scaleMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lookAheadTimeInput`<sup>Optional</sup> <a name="lookAheadTimeInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.lookAheadTimeInput"></a>

```typescript
public readonly lookAheadTimeInput: string;
```

- *Type:* string

---

##### `scaleModeInput`<sup>Optional</sup> <a name="scaleModeInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.scaleModeInput"></a>

```typescript
public readonly scaleModeInput: string;
```

- *Type:* string

---

##### `lookAheadTime`<sup>Required</sup> <a name="lookAheadTime" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.lookAheadTime"></a>

```typescript
public readonly lookAheadTime: string;
```

- *Type:* string

---

##### `scaleMode`<sup>Required</sup> <a name="scaleMode" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.scaleMode"></a>

```typescript
public readonly scaleMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAutoscaleSettingPredictive;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a>

---


### MonitorAutoscaleSettingProfileCapacityOutputReference <a name="MonitorAutoscaleSettingProfileCapacityOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.defaultInput">defaultInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.maximumInput">maximumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.minimumInput">minimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.default">default</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: number;
```

- *Type:* number

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: number;
```

- *Type:* number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: number;
```

- *Type:* number

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.default"></a>

```typescript
public readonly default: number;
```

- *Type:* number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAutoscaleSettingProfileCapacity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a>

---


### MonitorAutoscaleSettingProfileFixedDateOutputReference <a name="MonitorAutoscaleSettingProfileFixedDateOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resetTimezone"></a>

```typescript
public resetTimezone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAutoscaleSettingProfileFixedDate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a>

---


### MonitorAutoscaleSettingProfileList <a name="MonitorAutoscaleSettingProfileList" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.get"></a>

```typescript
public get(index: number): MonitorAutoscaleSettingProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAutoscaleSettingProfile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>[]

---


### MonitorAutoscaleSettingProfileOutputReference <a name="MonitorAutoscaleSettingProfileOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putCapacity">putCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putFixedDate">putFixedDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRecurrence">putRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetFixedDate">resetFixedDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetRecurrence">resetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacity` <a name="putCapacity" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putCapacity"></a>

```typescript
public putCapacity(value: MonitorAutoscaleSettingProfileCapacity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a>

---

##### `putFixedDate` <a name="putFixedDate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putFixedDate"></a>

```typescript
public putFixedDate(value: MonitorAutoscaleSettingProfileFixedDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putFixedDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a>

---

##### `putRecurrence` <a name="putRecurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRecurrence"></a>

```typescript
public putRecurrence(value: MonitorAutoscaleSettingProfileRecurrence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | MonitorAutoscaleSettingProfileRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>[]

---

##### `resetFixedDate` <a name="resetFixedDate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetFixedDate"></a>

```typescript
public resetFixedDate(): void
```

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetRecurrence"></a>

```typescript
public resetRecurrence(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetRule"></a>

```typescript
public resetRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference">MonitorAutoscaleSettingProfileCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fixedDate">fixedDate</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference">MonitorAutoscaleSettingProfileFixedDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference">MonitorAutoscaleSettingProfileRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList">MonitorAutoscaleSettingProfileRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.capacityInput">capacityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fixedDateInput">fixedDateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.capacity"></a>

```typescript
public readonly capacity: MonitorAutoscaleSettingProfileCapacityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference">MonitorAutoscaleSettingProfileCapacityOutputReference</a>

---

##### `fixedDate`<sup>Required</sup> <a name="fixedDate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fixedDate"></a>

```typescript
public readonly fixedDate: MonitorAutoscaleSettingProfileFixedDateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference">MonitorAutoscaleSettingProfileFixedDateOutputReference</a>

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.recurrence"></a>

```typescript
public readonly recurrence: MonitorAutoscaleSettingProfileRecurrenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference">MonitorAutoscaleSettingProfileRecurrenceOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.rule"></a>

```typescript
public readonly rule: MonitorAutoscaleSettingProfileRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList">MonitorAutoscaleSettingProfileRuleList</a>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.capacityInput"></a>

```typescript
public readonly capacityInput: MonitorAutoscaleSettingProfileCapacity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a>

---

##### `fixedDateInput`<sup>Optional</sup> <a name="fixedDateInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fixedDateInput"></a>

```typescript
public readonly fixedDateInput: MonitorAutoscaleSettingProfileFixedDate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.recurrenceInput"></a>

```typescript
public readonly recurrenceInput: MonitorAutoscaleSettingProfileRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | MonitorAutoscaleSettingProfileRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAutoscaleSettingProfile;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile">MonitorAutoscaleSettingProfile</a>

---


### MonitorAutoscaleSettingProfileRecurrenceOutputReference <a name="MonitorAutoscaleSettingProfileRecurrenceOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resetTimezone"></a>

```typescript
public resetTimezone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.daysInput">daysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.hoursInput">hoursInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.minutesInput">minutesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.days">days</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.hours">hours</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.minutes">minutes</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: string[];
```

- *Type:* string[]

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number[];
```

- *Type:* number[]

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number[];
```

- *Type:* number[]

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.days"></a>

```typescript
public readonly days: string[];
```

- *Type:* string[]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.hours"></a>

```typescript
public readonly hours: number[];
```

- *Type:* number[]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number[];
```

- *Type:* number[]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAutoscaleSettingProfileRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a>

---


### MonitorAutoscaleSettingProfileRuleList <a name="MonitorAutoscaleSettingProfileRuleList" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.get"></a>

```typescript
public get(index: number): MonitorAutoscaleSettingProfileRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAutoscaleSettingProfileRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>[]

---


### MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList <a name="MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.get"></a>

```typescript
public get(index: number): MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>[]

---


### MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference <a name="MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>

---


### MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference <a name="MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetDivideByInstanceCount">resetDivideByInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetMetricNamespace">resetMetricNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>[]

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetDivideByInstanceCount` <a name="resetDivideByInstanceCount" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetDivideByInstanceCount"></a>

```typescript
public resetDivideByInstanceCount(): void
```

##### `resetMetricNamespace` <a name="resetMetricNamespace" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetMetricNamespace"></a>

```typescript
public resetMetricNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.divideByInstanceCountInput">divideByInstanceCountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNamespaceInput">metricNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricResourceIdInput">metricResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeAggregationInput">timeAggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeGrainInput">timeGrainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeWindowInput">timeWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.divideByInstanceCount">divideByInstanceCount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricResourceId">metricResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeAggregation">timeAggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeGrain">timeGrain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeWindow">timeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions</a>[]

---

##### `divideByInstanceCountInput`<sup>Optional</sup> <a name="divideByInstanceCountInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.divideByInstanceCountInput"></a>

```typescript
public readonly divideByInstanceCountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `metricNamespaceInput`<sup>Optional</sup> <a name="metricNamespaceInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNamespaceInput"></a>

```typescript
public readonly metricNamespaceInput: string;
```

- *Type:* string

---

##### `metricResourceIdInput`<sup>Optional</sup> <a name="metricResourceIdInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricResourceIdInput"></a>

```typescript
public readonly metricResourceIdInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `timeAggregationInput`<sup>Optional</sup> <a name="timeAggregationInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeAggregationInput"></a>

```typescript
public readonly timeAggregationInput: string;
```

- *Type:* string

---

##### `timeGrainInput`<sup>Optional</sup> <a name="timeGrainInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeGrainInput"></a>

```typescript
public readonly timeGrainInput: string;
```

- *Type:* string

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeWindowInput"></a>

```typescript
public readonly timeWindowInput: string;
```

- *Type:* string

---

##### `divideByInstanceCount`<sup>Required</sup> <a name="divideByInstanceCount" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.divideByInstanceCount"></a>

```typescript
public readonly divideByInstanceCount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

---

##### `metricResourceId`<sup>Required</sup> <a name="metricResourceId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricResourceId"></a>

```typescript
public readonly metricResourceId: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `timeAggregation`<sup>Required</sup> <a name="timeAggregation" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeAggregation"></a>

```typescript
public readonly timeAggregation: string;
```

- *Type:* string

---

##### `timeGrain`<sup>Required</sup> <a name="timeGrain" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeGrain"></a>

```typescript
public readonly timeGrain: string;
```

- *Type:* string

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeWindow"></a>

```typescript
public readonly timeWindow: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAutoscaleSettingProfileRuleMetricTrigger;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a>

---


### MonitorAutoscaleSettingProfileRuleOutputReference <a name="MonitorAutoscaleSettingProfileRuleOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger">putMetricTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putScaleAction">putScaleAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricTrigger` <a name="putMetricTrigger" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger"></a>

```typescript
public putMetricTrigger(value: MonitorAutoscaleSettingProfileRuleMetricTrigger): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a>

---

##### `putScaleAction` <a name="putScaleAction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putScaleAction"></a>

```typescript
public putScaleAction(value: MonitorAutoscaleSettingProfileRuleScaleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putScaleAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.metricTrigger">metricTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference">MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.scaleAction">scaleAction</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference">MonitorAutoscaleSettingProfileRuleScaleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.metricTriggerInput">metricTriggerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.scaleActionInput">scaleActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricTrigger`<sup>Required</sup> <a name="metricTrigger" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.metricTrigger"></a>

```typescript
public readonly metricTrigger: MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference">MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference</a>

---

##### `scaleAction`<sup>Required</sup> <a name="scaleAction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.scaleAction"></a>

```typescript
public readonly scaleAction: MonitorAutoscaleSettingProfileRuleScaleActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference">MonitorAutoscaleSettingProfileRuleScaleActionOutputReference</a>

---

##### `metricTriggerInput`<sup>Optional</sup> <a name="metricTriggerInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.metricTriggerInput"></a>

```typescript
public readonly metricTriggerInput: MonitorAutoscaleSettingProfileRuleMetricTrigger;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a>

---

##### `scaleActionInput`<sup>Optional</sup> <a name="scaleActionInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.scaleActionInput"></a>

```typescript
public readonly scaleActionInput: MonitorAutoscaleSettingProfileRuleScaleAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAutoscaleSettingProfileRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule">MonitorAutoscaleSettingProfileRule</a>

---


### MonitorAutoscaleSettingProfileRuleScaleActionOutputReference <a name="MonitorAutoscaleSettingProfileRuleScaleActionOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.cooldown">cooldown</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.cooldownInput"></a>

```typescript
public readonly cooldownInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.cooldown"></a>

```typescript
public readonly cooldown: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAutoscaleSettingProfileRuleScaleAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a>

---


### MonitorAutoscaleSettingTimeoutsOutputReference <a name="MonitorAutoscaleSettingTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitorAutoscaleSetting } from '@cdktf/provider-azurerm'

new monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAutoscaleSettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a>

---



