# `monitorSmartDetectorAlertRule` Submodule <a name="`monitorSmartDetectorAlertRule` Submodule" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorSmartDetectorAlertRule <a name="MonitorSmartDetectorAlertRule" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule azurerm_monitor_smart_detector_alert_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.Initializer"></a>

```typescript
import { monitorSmartDetectorAlertRule } from '@cdktf/provider-azurerm'

new monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule(scope: Construct, id: string, config: MonitorSmartDetectorAlertRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig">MonitorSmartDetectorAlertRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig">MonitorSmartDetectorAlertRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.putActionGroup">putActionGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetThrottlingDuration">resetThrottlingDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionGroup` <a name="putActionGroup" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.putActionGroup"></a>

```typescript
public putActionGroup(value: MonitorSmartDetectorAlertRuleActionGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.putActionGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup">MonitorSmartDetectorAlertRuleActionGroup</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitorSmartDetectorAlertRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts">MonitorSmartDetectorAlertRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThrottlingDuration` <a name="resetThrottlingDuration" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetThrottlingDuration"></a>

```typescript
public resetThrottlingDuration(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorSmartDetectorAlertRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isConstruct"></a>

```typescript
import { monitorSmartDetectorAlertRule } from '@cdktf/provider-azurerm'

monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isTerraformElement"></a>

```typescript
import { monitorSmartDetectorAlertRule } from '@cdktf/provider-azurerm'

monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isTerraformResource"></a>

```typescript
import { monitorSmartDetectorAlertRule } from '@cdktf/provider-azurerm'

monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.generateConfigForImport"></a>

```typescript
import { monitorSmartDetectorAlertRule } from '@cdktf/provider-azurerm'

monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MonitorSmartDetectorAlertRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorSmartDetectorAlertRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorSmartDetectorAlertRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorSmartDetectorAlertRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.actionGroup">actionGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference">MonitorSmartDetectorAlertRuleActionGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference">MonitorSmartDetectorAlertRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.actionGroupInput">actionGroupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup">MonitorSmartDetectorAlertRuleActionGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.detectorTypeInput">detectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.scopeResourceIdsInput">scopeResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.throttlingDurationInput">throttlingDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts">MonitorSmartDetectorAlertRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.detectorType">detectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.scopeResourceIds">scopeResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.throttlingDuration">throttlingDuration</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionGroup`<sup>Required</sup> <a name="actionGroup" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.actionGroup"></a>

```typescript
public readonly actionGroup: MonitorSmartDetectorAlertRuleActionGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference">MonitorSmartDetectorAlertRuleActionGroupOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorSmartDetectorAlertRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference">MonitorSmartDetectorAlertRuleTimeoutsOutputReference</a>

---

##### `actionGroupInput`<sup>Optional</sup> <a name="actionGroupInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.actionGroupInput"></a>

```typescript
public readonly actionGroupInput: MonitorSmartDetectorAlertRuleActionGroup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup">MonitorSmartDetectorAlertRuleActionGroup</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `detectorTypeInput`<sup>Optional</sup> <a name="detectorTypeInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.detectorTypeInput"></a>

```typescript
public readonly detectorTypeInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `scopeResourceIdsInput`<sup>Optional</sup> <a name="scopeResourceIdsInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.scopeResourceIdsInput"></a>

```typescript
public readonly scopeResourceIdsInput: string[];
```

- *Type:* string[]

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throttlingDurationInput`<sup>Optional</sup> <a name="throttlingDurationInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.throttlingDurationInput"></a>

```typescript
public readonly throttlingDurationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MonitorSmartDetectorAlertRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts">MonitorSmartDetectorAlertRuleTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `detectorType`<sup>Required</sup> <a name="detectorType" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.detectorType"></a>

```typescript
public readonly detectorType: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `scopeResourceIds`<sup>Required</sup> <a name="scopeResourceIds" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.scopeResourceIds"></a>

```typescript
public readonly scopeResourceIds: string[];
```

- *Type:* string[]

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throttlingDuration`<sup>Required</sup> <a name="throttlingDuration" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.throttlingDuration"></a>

```typescript
public readonly throttlingDuration: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorSmartDetectorAlertRuleActionGroup <a name="MonitorSmartDetectorAlertRuleActionGroup" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup.Initializer"></a>

```typescript
import { monitorSmartDetectorAlertRule } from '@cdktf/provider-azurerm'

const monitorSmartDetectorAlertRuleActionGroup: monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup.property.ids">ids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#ids MonitorSmartDetectorAlertRule#ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup.property.emailSubject">emailSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#email_subject MonitorSmartDetectorAlertRule#email_subject}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup.property.webhookPayload">webhookPayload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#webhook_payload MonitorSmartDetectorAlertRule#webhook_payload}. |

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#ids MonitorSmartDetectorAlertRule#ids}.

---

##### `emailSubject`<sup>Optional</sup> <a name="emailSubject" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup.property.emailSubject"></a>

```typescript
public readonly emailSubject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#email_subject MonitorSmartDetectorAlertRule#email_subject}.

---

##### `webhookPayload`<sup>Optional</sup> <a name="webhookPayload" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup.property.webhookPayload"></a>

```typescript
public readonly webhookPayload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#webhook_payload MonitorSmartDetectorAlertRule#webhook_payload}.

---

### MonitorSmartDetectorAlertRuleConfig <a name="MonitorSmartDetectorAlertRuleConfig" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.Initializer"></a>

```typescript
import { monitorSmartDetectorAlertRule } from '@cdktf/provider-azurerm'

const monitorSmartDetectorAlertRuleConfig: monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.actionGroup">actionGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup">MonitorSmartDetectorAlertRuleActionGroup</a></code> | action_group block. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.detectorType">detectorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#detector_type MonitorSmartDetectorAlertRule#detector_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#frequency MonitorSmartDetectorAlertRule#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#name MonitorSmartDetectorAlertRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#resource_group_name MonitorSmartDetectorAlertRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.scopeResourceIds">scopeResourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#scope_resource_ids MonitorSmartDetectorAlertRule#scope_resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.severity">severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#severity MonitorSmartDetectorAlertRule#severity}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#description MonitorSmartDetectorAlertRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#enabled MonitorSmartDetectorAlertRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#id MonitorSmartDetectorAlertRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#tags MonitorSmartDetectorAlertRule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.throttlingDuration">throttlingDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#throttling_duration MonitorSmartDetectorAlertRule#throttling_duration}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts">MonitorSmartDetectorAlertRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionGroup`<sup>Required</sup> <a name="actionGroup" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.actionGroup"></a>

```typescript
public readonly actionGroup: MonitorSmartDetectorAlertRuleActionGroup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup">MonitorSmartDetectorAlertRuleActionGroup</a>

action_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#action_group MonitorSmartDetectorAlertRule#action_group}

---

##### `detectorType`<sup>Required</sup> <a name="detectorType" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.detectorType"></a>

```typescript
public readonly detectorType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#detector_type MonitorSmartDetectorAlertRule#detector_type}.

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#frequency MonitorSmartDetectorAlertRule#frequency}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#name MonitorSmartDetectorAlertRule#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#resource_group_name MonitorSmartDetectorAlertRule#resource_group_name}.

---

##### `scopeResourceIds`<sup>Required</sup> <a name="scopeResourceIds" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.scopeResourceIds"></a>

```typescript
public readonly scopeResourceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#scope_resource_ids MonitorSmartDetectorAlertRule#scope_resource_ids}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#severity MonitorSmartDetectorAlertRule#severity}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#description MonitorSmartDetectorAlertRule#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#enabled MonitorSmartDetectorAlertRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#id MonitorSmartDetectorAlertRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#tags MonitorSmartDetectorAlertRule#tags}.

---

##### `throttlingDuration`<sup>Optional</sup> <a name="throttlingDuration" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.throttlingDuration"></a>

```typescript
public readonly throttlingDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#throttling_duration MonitorSmartDetectorAlertRule#throttling_duration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorSmartDetectorAlertRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts">MonitorSmartDetectorAlertRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#timeouts MonitorSmartDetectorAlertRule#timeouts}

---

### MonitorSmartDetectorAlertRuleTimeouts <a name="MonitorSmartDetectorAlertRuleTimeouts" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.Initializer"></a>

```typescript
import { monitorSmartDetectorAlertRule } from '@cdktf/provider-azurerm'

const monitorSmartDetectorAlertRuleTimeouts: monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#create MonitorSmartDetectorAlertRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#delete MonitorSmartDetectorAlertRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#read MonitorSmartDetectorAlertRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#update MonitorSmartDetectorAlertRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#create MonitorSmartDetectorAlertRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#delete MonitorSmartDetectorAlertRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#read MonitorSmartDetectorAlertRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/monitor_smart_detector_alert_rule#update MonitorSmartDetectorAlertRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorSmartDetectorAlertRuleActionGroupOutputReference <a name="MonitorSmartDetectorAlertRuleActionGroupOutputReference" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.Initializer"></a>

```typescript
import { monitorSmartDetectorAlertRule } from '@cdktf/provider-azurerm'

new monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.resetEmailSubject">resetEmailSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.resetWebhookPayload">resetWebhookPayload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailSubject` <a name="resetEmailSubject" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.resetEmailSubject"></a>

```typescript
public resetEmailSubject(): void
```

##### `resetWebhookPayload` <a name="resetWebhookPayload" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.resetWebhookPayload"></a>

```typescript
public resetWebhookPayload(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.emailSubjectInput">emailSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.idsInput">idsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.webhookPayloadInput">webhookPayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.emailSubject">emailSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.webhookPayload">webhookPayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup">MonitorSmartDetectorAlertRuleActionGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailSubjectInput`<sup>Optional</sup> <a name="emailSubjectInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.emailSubjectInput"></a>

```typescript
public readonly emailSubjectInput: string;
```

- *Type:* string

---

##### `idsInput`<sup>Optional</sup> <a name="idsInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.idsInput"></a>

```typescript
public readonly idsInput: string[];
```

- *Type:* string[]

---

##### `webhookPayloadInput`<sup>Optional</sup> <a name="webhookPayloadInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.webhookPayloadInput"></a>

```typescript
public readonly webhookPayloadInput: string;
```

- *Type:* string

---

##### `emailSubject`<sup>Required</sup> <a name="emailSubject" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.emailSubject"></a>

```typescript
public readonly emailSubject: string;
```

- *Type:* string

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `webhookPayload`<sup>Required</sup> <a name="webhookPayload" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.webhookPayload"></a>

```typescript
public readonly webhookPayload: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorSmartDetectorAlertRuleActionGroup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup">MonitorSmartDetectorAlertRuleActionGroup</a>

---


### MonitorSmartDetectorAlertRuleTimeoutsOutputReference <a name="MonitorSmartDetectorAlertRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitorSmartDetectorAlertRule } from '@cdktf/provider-azurerm'

new monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts">MonitorSmartDetectorAlertRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorSmartDetectorAlertRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts">MonitorSmartDetectorAlertRuleTimeouts</a>

---



