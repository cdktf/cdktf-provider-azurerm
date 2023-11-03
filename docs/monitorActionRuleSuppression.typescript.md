# `azurerm_monitor_action_rule_suppression`

Refer to the Terraform Registory for docs: [`azurerm_monitor_action_rule_suppression`](https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression).

# `monitorActionRuleSuppression` Submodule <a name="`monitorActionRuleSuppression` Submodule" id="@cdktf/provider-azurerm.monitorActionRuleSuppression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorActionRuleSuppression <a name="MonitorActionRuleSuppression" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression azurerm_monitor_action_rule_suppression}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

new monitorActionRuleSuppression.MonitorActionRuleSuppression(scope: Construct, id: string, config: MonitorActionRuleSuppressionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig">MonitorActionRuleSuppressionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig">MonitorActionRuleSuppressionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putSuppression">putSuppression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putCondition"></a>

```typescript
public putCondition(value: MonitorActionRuleSuppressionCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a>

---

##### `putScope` <a name="putScope" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putScope"></a>

```typescript
public putScope(value: MonitorActionRuleSuppressionScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a>

---

##### `putSuppression` <a name="putSuppression" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putSuppression"></a>

```typescript
public putSuppression(value: MonitorActionRuleSuppressionSuppression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putSuppression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitorActionRuleSuppressionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorActionRuleSuppression resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isConstruct"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

monitorActionRuleSuppression.MonitorActionRuleSuppression.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isTerraformElement"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

monitorActionRuleSuppression.MonitorActionRuleSuppression.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isTerraformResource"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

monitorActionRuleSuppression.MonitorActionRuleSuppression.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.generateConfigForImport"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

monitorActionRuleSuppression.MonitorActionRuleSuppression.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MonitorActionRuleSuppression resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorActionRuleSuppression to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorActionRuleSuppression that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorActionRuleSuppression to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference">MonitorActionRuleSuppressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference">MonitorActionRuleSuppressionScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.suppression">suppression</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference">MonitorActionRuleSuppressionSuppressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference">MonitorActionRuleSuppressionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.scopeInput">scopeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.suppressionInput">suppressionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.condition"></a>

```typescript
public readonly condition: MonitorActionRuleSuppressionConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference">MonitorActionRuleSuppressionConditionOutputReference</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.scope"></a>

```typescript
public readonly scope: MonitorActionRuleSuppressionScopeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference">MonitorActionRuleSuppressionScopeOutputReference</a>

---

##### `suppression`<sup>Required</sup> <a name="suppression" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.suppression"></a>

```typescript
public readonly suppression: MonitorActionRuleSuppressionSuppressionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference">MonitorActionRuleSuppressionSuppressionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorActionRuleSuppressionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference">MonitorActionRuleSuppressionTimeoutsOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.conditionInput"></a>

```typescript
public readonly conditionInput: MonitorActionRuleSuppressionCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.scopeInput"></a>

```typescript
public readonly scopeInput: MonitorActionRuleSuppressionScope;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a>

---

##### `suppressionInput`<sup>Optional</sup> <a name="suppressionInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.suppressionInput"></a>

```typescript
public readonly suppressionInput: MonitorActionRuleSuppressionSuppression;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MonitorActionRuleSuppressionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorActionRuleSuppressionCondition <a name="MonitorActionRuleSuppressionCondition" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

const monitorActionRuleSuppressionCondition: monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.alertContext">alertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext">MonitorActionRuleSuppressionConditionAlertContext</a></code> | alert_context block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.alertRuleId">alertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId">MonitorActionRuleSuppressionConditionAlertRuleId</a></code> | alert_rule_id block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.description">description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription">MonitorActionRuleSuppressionConditionDescription</a></code> | description block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor">MonitorActionRuleSuppressionConditionMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.monitorService">monitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService">MonitorActionRuleSuppressionConditionMonitorService</a></code> | monitor_service block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity">MonitorActionRuleSuppressionConditionSeverity</a></code> | severity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.targetResourceType">targetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType">MonitorActionRuleSuppressionConditionTargetResourceType</a></code> | target_resource_type block. |

---

##### `alertContext`<sup>Optional</sup> <a name="alertContext" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.alertContext"></a>

```typescript
public readonly alertContext: MonitorActionRuleSuppressionConditionAlertContext;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext">MonitorActionRuleSuppressionConditionAlertContext</a>

alert_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#alert_context MonitorActionRuleSuppression#alert_context}

---

##### `alertRuleId`<sup>Optional</sup> <a name="alertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.alertRuleId"></a>

```typescript
public readonly alertRuleId: MonitorActionRuleSuppressionConditionAlertRuleId;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId">MonitorActionRuleSuppressionConditionAlertRuleId</a>

alert_rule_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#alert_rule_id MonitorActionRuleSuppression#alert_rule_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.description"></a>

```typescript
public readonly description: MonitorActionRuleSuppressionConditionDescription;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription">MonitorActionRuleSuppressionConditionDescription</a>

description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#description MonitorActionRuleSuppression#description}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.monitor"></a>

```typescript
public readonly monitor: MonitorActionRuleSuppressionConditionMonitor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor">MonitorActionRuleSuppressionConditionMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#monitor MonitorActionRuleSuppression#monitor}

---

##### `monitorService`<sup>Optional</sup> <a name="monitorService" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.monitorService"></a>

```typescript
public readonly monitorService: MonitorActionRuleSuppressionConditionMonitorService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService">MonitorActionRuleSuppressionConditionMonitorService</a>

monitor_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#monitor_service MonitorActionRuleSuppression#monitor_service}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.severity"></a>

```typescript
public readonly severity: MonitorActionRuleSuppressionConditionSeverity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity">MonitorActionRuleSuppressionConditionSeverity</a>

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#severity MonitorActionRuleSuppression#severity}

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: MonitorActionRuleSuppressionConditionTargetResourceType;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType">MonitorActionRuleSuppressionConditionTargetResourceType</a>

target_resource_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#target_resource_type MonitorActionRuleSuppression#target_resource_type}

---

### MonitorActionRuleSuppressionConditionAlertContext <a name="MonitorActionRuleSuppressionConditionAlertContext" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

const monitorActionRuleSuppressionConditionAlertContext: monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

### MonitorActionRuleSuppressionConditionAlertRuleId <a name="MonitorActionRuleSuppressionConditionAlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

const monitorActionRuleSuppressionConditionAlertRuleId: monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

### MonitorActionRuleSuppressionConditionDescription <a name="MonitorActionRuleSuppressionConditionDescription" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

const monitorActionRuleSuppressionConditionDescription: monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

### MonitorActionRuleSuppressionConditionMonitor <a name="MonitorActionRuleSuppressionConditionMonitor" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

const monitorActionRuleSuppressionConditionMonitor: monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

### MonitorActionRuleSuppressionConditionMonitorService <a name="MonitorActionRuleSuppressionConditionMonitorService" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

const monitorActionRuleSuppressionConditionMonitorService: monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

### MonitorActionRuleSuppressionConditionSeverity <a name="MonitorActionRuleSuppressionConditionSeverity" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

const monitorActionRuleSuppressionConditionSeverity: monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

### MonitorActionRuleSuppressionConditionTargetResourceType <a name="MonitorActionRuleSuppressionConditionTargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

const monitorActionRuleSuppressionConditionTargetResourceType: monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

### MonitorActionRuleSuppressionConfig <a name="MonitorActionRuleSuppressionConfig" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

const monitorActionRuleSuppressionConfig: monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#name MonitorActionRuleSuppression#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#resource_group_name MonitorActionRuleSuppression#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.suppression">suppression</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a></code> | suppression block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#description MonitorActionRuleSuppression#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#enabled MonitorActionRuleSuppression#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#id MonitorActionRuleSuppression#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#tags MonitorActionRuleSuppression#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#name MonitorActionRuleSuppression#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#resource_group_name MonitorActionRuleSuppression#resource_group_name}.

---

##### `suppression`<sup>Required</sup> <a name="suppression" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.suppression"></a>

```typescript
public readonly suppression: MonitorActionRuleSuppressionSuppression;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a>

suppression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#suppression MonitorActionRuleSuppression#suppression}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.condition"></a>

```typescript
public readonly condition: MonitorActionRuleSuppressionCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#condition MonitorActionRuleSuppression#condition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#description MonitorActionRuleSuppression#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#enabled MonitorActionRuleSuppression#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#id MonitorActionRuleSuppression#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.scope"></a>

```typescript
public readonly scope: MonitorActionRuleSuppressionScope;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#scope MonitorActionRuleSuppression#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#tags MonitorActionRuleSuppression#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorActionRuleSuppressionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#timeouts MonitorActionRuleSuppression#timeouts}

---

### MonitorActionRuleSuppressionScope <a name="MonitorActionRuleSuppressionScope" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

const monitorActionRuleSuppressionScope: monitorActionRuleSuppression.MonitorActionRuleSuppressionScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope.property.resourceIds">resourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#resource_ids MonitorActionRuleSuppression#resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#type MonitorActionRuleSuppression#type}. |

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope.property.resourceIds"></a>

```typescript
public readonly resourceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#resource_ids MonitorActionRuleSuppression#resource_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#type MonitorActionRuleSuppression#type}.

---

### MonitorActionRuleSuppressionSuppression <a name="MonitorActionRuleSuppressionSuppression" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

const monitorActionRuleSuppressionSuppression: monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression.property.recurrenceType">recurrenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#recurrence_type MonitorActionRuleSuppression#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule">MonitorActionRuleSuppressionSuppressionSchedule</a></code> | schedule block. |

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression.property.recurrenceType"></a>

```typescript
public readonly recurrenceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#recurrence_type MonitorActionRuleSuppression#recurrence_type}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression.property.schedule"></a>

```typescript
public readonly schedule: MonitorActionRuleSuppressionSuppressionSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule">MonitorActionRuleSuppressionSuppressionSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#schedule MonitorActionRuleSuppression#schedule}

---

### MonitorActionRuleSuppressionSuppressionSchedule <a name="MonitorActionRuleSuppressionSuppressionSchedule" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

const monitorActionRuleSuppressionSuppressionSchedule: monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.endDateUtc">endDateUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#end_date_utc MonitorActionRuleSuppression#end_date_utc}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.startDateUtc">startDateUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#start_date_utc MonitorActionRuleSuppression#start_date_utc}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.recurrenceMonthly">recurrenceMonthly</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#recurrence_monthly MonitorActionRuleSuppression#recurrence_monthly}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.recurrenceWeekly">recurrenceWeekly</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#recurrence_weekly MonitorActionRuleSuppression#recurrence_weekly}. |

---

##### `endDateUtc`<sup>Required</sup> <a name="endDateUtc" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.endDateUtc"></a>

```typescript
public readonly endDateUtc: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#end_date_utc MonitorActionRuleSuppression#end_date_utc}.

---

##### `startDateUtc`<sup>Required</sup> <a name="startDateUtc" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.startDateUtc"></a>

```typescript
public readonly startDateUtc: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#start_date_utc MonitorActionRuleSuppression#start_date_utc}.

---

##### `recurrenceMonthly`<sup>Optional</sup> <a name="recurrenceMonthly" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.recurrenceMonthly"></a>

```typescript
public readonly recurrenceMonthly: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#recurrence_monthly MonitorActionRuleSuppression#recurrence_monthly}.

---

##### `recurrenceWeekly`<sup>Optional</sup> <a name="recurrenceWeekly" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.recurrenceWeekly"></a>

```typescript
public readonly recurrenceWeekly: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#recurrence_weekly MonitorActionRuleSuppression#recurrence_weekly}.

---

### MonitorActionRuleSuppressionTimeouts <a name="MonitorActionRuleSuppressionTimeouts" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

const monitorActionRuleSuppressionTimeouts: monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#create MonitorActionRuleSuppression#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#delete MonitorActionRuleSuppression#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#read MonitorActionRuleSuppression#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#update MonitorActionRuleSuppression#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#create MonitorActionRuleSuppression#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#delete MonitorActionRuleSuppression#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#read MonitorActionRuleSuppression#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/monitor_action_rule_suppression#update MonitorActionRuleSuppression#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorActionRuleSuppressionConditionAlertContextOutputReference <a name="MonitorActionRuleSuppressionConditionAlertContextOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

new monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext">MonitorActionRuleSuppressionConditionAlertContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorActionRuleSuppressionConditionAlertContext;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext">MonitorActionRuleSuppressionConditionAlertContext</a>

---


### MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference <a name="MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

new monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId">MonitorActionRuleSuppressionConditionAlertRuleId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorActionRuleSuppressionConditionAlertRuleId;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId">MonitorActionRuleSuppressionConditionAlertRuleId</a>

---


### MonitorActionRuleSuppressionConditionDescriptionOutputReference <a name="MonitorActionRuleSuppressionConditionDescriptionOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

new monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription">MonitorActionRuleSuppressionConditionDescription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorActionRuleSuppressionConditionDescription;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription">MonitorActionRuleSuppressionConditionDescription</a>

---


### MonitorActionRuleSuppressionConditionMonitorOutputReference <a name="MonitorActionRuleSuppressionConditionMonitorOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

new monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor">MonitorActionRuleSuppressionConditionMonitor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorActionRuleSuppressionConditionMonitor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor">MonitorActionRuleSuppressionConditionMonitor</a>

---


### MonitorActionRuleSuppressionConditionMonitorServiceOutputReference <a name="MonitorActionRuleSuppressionConditionMonitorServiceOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

new monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService">MonitorActionRuleSuppressionConditionMonitorService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorActionRuleSuppressionConditionMonitorService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService">MonitorActionRuleSuppressionConditionMonitorService</a>

---


### MonitorActionRuleSuppressionConditionOutputReference <a name="MonitorActionRuleSuppressionConditionOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

new monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putAlertContext">putAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putAlertRuleId">putAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putDescription">putDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putMonitor">putMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putMonitorService">putMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putSeverity">putSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putTargetResourceType">putTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetAlertContext">resetAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetAlertRuleId">resetAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetMonitor">resetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetMonitorService">resetMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetTargetResourceType">resetTargetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlertContext` <a name="putAlertContext" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putAlertContext"></a>

```typescript
public putAlertContext(value: MonitorActionRuleSuppressionConditionAlertContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putAlertContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext">MonitorActionRuleSuppressionConditionAlertContext</a>

---

##### `putAlertRuleId` <a name="putAlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putAlertRuleId"></a>

```typescript
public putAlertRuleId(value: MonitorActionRuleSuppressionConditionAlertRuleId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putAlertRuleId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId">MonitorActionRuleSuppressionConditionAlertRuleId</a>

---

##### `putDescription` <a name="putDescription" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putDescription"></a>

```typescript
public putDescription(value: MonitorActionRuleSuppressionConditionDescription): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putDescription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription">MonitorActionRuleSuppressionConditionDescription</a>

---

##### `putMonitor` <a name="putMonitor" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putMonitor"></a>

```typescript
public putMonitor(value: MonitorActionRuleSuppressionConditionMonitor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor">MonitorActionRuleSuppressionConditionMonitor</a>

---

##### `putMonitorService` <a name="putMonitorService" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putMonitorService"></a>

```typescript
public putMonitorService(value: MonitorActionRuleSuppressionConditionMonitorService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putMonitorService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService">MonitorActionRuleSuppressionConditionMonitorService</a>

---

##### `putSeverity` <a name="putSeverity" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putSeverity"></a>

```typescript
public putSeverity(value: MonitorActionRuleSuppressionConditionSeverity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putSeverity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity">MonitorActionRuleSuppressionConditionSeverity</a>

---

##### `putTargetResourceType` <a name="putTargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putTargetResourceType"></a>

```typescript
public putTargetResourceType(value: MonitorActionRuleSuppressionConditionTargetResourceType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putTargetResourceType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType">MonitorActionRuleSuppressionConditionTargetResourceType</a>

---

##### `resetAlertContext` <a name="resetAlertContext" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetAlertContext"></a>

```typescript
public resetAlertContext(): void
```

##### `resetAlertRuleId` <a name="resetAlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetAlertRuleId"></a>

```typescript
public resetAlertRuleId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetMonitor"></a>

```typescript
public resetMonitor(): void
```

##### `resetMonitorService` <a name="resetMonitorService" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetMonitorService"></a>

```typescript
public resetMonitorService(): void
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetSeverity"></a>

```typescript
public resetSeverity(): void
```

##### `resetTargetResourceType` <a name="resetTargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetTargetResourceType"></a>

```typescript
public resetTargetResourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertContext">alertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference">MonitorActionRuleSuppressionConditionAlertContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertRuleId">alertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference">MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.description">description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference">MonitorActionRuleSuppressionConditionDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference">MonitorActionRuleSuppressionConditionMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitorService">monitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference">MonitorActionRuleSuppressionConditionMonitorServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference">MonitorActionRuleSuppressionConditionSeverityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.targetResourceType">targetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference">MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertContextInput">alertContextInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext">MonitorActionRuleSuppressionConditionAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertRuleIdInput">alertRuleIdInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId">MonitorActionRuleSuppressionConditionAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription">MonitorActionRuleSuppressionConditionDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitorInput">monitorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor">MonitorActionRuleSuppressionConditionMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitorServiceInput">monitorServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService">MonitorActionRuleSuppressionConditionMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.severityInput">severityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity">MonitorActionRuleSuppressionConditionSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.targetResourceTypeInput">targetResourceTypeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType">MonitorActionRuleSuppressionConditionTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alertContext`<sup>Required</sup> <a name="alertContext" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertContext"></a>

```typescript
public readonly alertContext: MonitorActionRuleSuppressionConditionAlertContextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference">MonitorActionRuleSuppressionConditionAlertContextOutputReference</a>

---

##### `alertRuleId`<sup>Required</sup> <a name="alertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertRuleId"></a>

```typescript
public readonly alertRuleId: MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference">MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.description"></a>

```typescript
public readonly description: MonitorActionRuleSuppressionConditionDescriptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference">MonitorActionRuleSuppressionConditionDescriptionOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitor"></a>

```typescript
public readonly monitor: MonitorActionRuleSuppressionConditionMonitorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference">MonitorActionRuleSuppressionConditionMonitorOutputReference</a>

---

##### `monitorService`<sup>Required</sup> <a name="monitorService" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitorService"></a>

```typescript
public readonly monitorService: MonitorActionRuleSuppressionConditionMonitorServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference">MonitorActionRuleSuppressionConditionMonitorServiceOutputReference</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.severity"></a>

```typescript
public readonly severity: MonitorActionRuleSuppressionConditionSeverityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference">MonitorActionRuleSuppressionConditionSeverityOutputReference</a>

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference">MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference</a>

---

##### `alertContextInput`<sup>Optional</sup> <a name="alertContextInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertContextInput"></a>

```typescript
public readonly alertContextInput: MonitorActionRuleSuppressionConditionAlertContext;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext">MonitorActionRuleSuppressionConditionAlertContext</a>

---

##### `alertRuleIdInput`<sup>Optional</sup> <a name="alertRuleIdInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertRuleIdInput"></a>

```typescript
public readonly alertRuleIdInput: MonitorActionRuleSuppressionConditionAlertRuleId;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId">MonitorActionRuleSuppressionConditionAlertRuleId</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: MonitorActionRuleSuppressionConditionDescription;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription">MonitorActionRuleSuppressionConditionDescription</a>

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitorInput"></a>

```typescript
public readonly monitorInput: MonitorActionRuleSuppressionConditionMonitor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor">MonitorActionRuleSuppressionConditionMonitor</a>

---

##### `monitorServiceInput`<sup>Optional</sup> <a name="monitorServiceInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitorServiceInput"></a>

```typescript
public readonly monitorServiceInput: MonitorActionRuleSuppressionConditionMonitorService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService">MonitorActionRuleSuppressionConditionMonitorService</a>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: MonitorActionRuleSuppressionConditionSeverity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity">MonitorActionRuleSuppressionConditionSeverity</a>

---

##### `targetResourceTypeInput`<sup>Optional</sup> <a name="targetResourceTypeInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.targetResourceTypeInput"></a>

```typescript
public readonly targetResourceTypeInput: MonitorActionRuleSuppressionConditionTargetResourceType;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType">MonitorActionRuleSuppressionConditionTargetResourceType</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorActionRuleSuppressionCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a>

---


### MonitorActionRuleSuppressionConditionSeverityOutputReference <a name="MonitorActionRuleSuppressionConditionSeverityOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

new monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity">MonitorActionRuleSuppressionConditionSeverity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorActionRuleSuppressionConditionSeverity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity">MonitorActionRuleSuppressionConditionSeverity</a>

---


### MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference <a name="MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

new monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType">MonitorActionRuleSuppressionConditionTargetResourceType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorActionRuleSuppressionConditionTargetResourceType;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType">MonitorActionRuleSuppressionConditionTargetResourceType</a>

---


### MonitorActionRuleSuppressionScopeOutputReference <a name="MonitorActionRuleSuppressionScopeOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

new monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.resourceIdsInput">resourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.resourceIds">resourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceIdsInput`<sup>Optional</sup> <a name="resourceIdsInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.resourceIdsInput"></a>

```typescript
public readonly resourceIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.resourceIds"></a>

```typescript
public readonly resourceIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorActionRuleSuppressionScope;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a>

---


### MonitorActionRuleSuppressionSuppressionOutputReference <a name="MonitorActionRuleSuppressionSuppressionOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

new monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: MonitorActionRuleSuppressionSuppressionSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule">MonitorActionRuleSuppressionSuppressionSchedule</a>

---

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference">MonitorActionRuleSuppressionSuppressionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.recurrenceTypeInput">recurrenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule">MonitorActionRuleSuppressionSuppressionSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.recurrenceType">recurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.schedule"></a>

```typescript
public readonly schedule: MonitorActionRuleSuppressionSuppressionScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference">MonitorActionRuleSuppressionSuppressionScheduleOutputReference</a>

---

##### `recurrenceTypeInput`<sup>Optional</sup> <a name="recurrenceTypeInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.recurrenceTypeInput"></a>

```typescript
public readonly recurrenceTypeInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: MonitorActionRuleSuppressionSuppressionSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule">MonitorActionRuleSuppressionSuppressionSchedule</a>

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.recurrenceType"></a>

```typescript
public readonly recurrenceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorActionRuleSuppressionSuppression;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a>

---


### MonitorActionRuleSuppressionSuppressionScheduleOutputReference <a name="MonitorActionRuleSuppressionSuppressionScheduleOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

new monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.resetRecurrenceMonthly">resetRecurrenceMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.resetRecurrenceWeekly">resetRecurrenceWeekly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRecurrenceMonthly` <a name="resetRecurrenceMonthly" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.resetRecurrenceMonthly"></a>

```typescript
public resetRecurrenceMonthly(): void
```

##### `resetRecurrenceWeekly` <a name="resetRecurrenceWeekly" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.resetRecurrenceWeekly"></a>

```typescript
public resetRecurrenceWeekly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.endDateUtcInput">endDateUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceMonthlyInput">recurrenceMonthlyInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceWeeklyInput">recurrenceWeeklyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.startDateUtcInput">startDateUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.endDateUtc">endDateUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceMonthly">recurrenceMonthly</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceWeekly">recurrenceWeekly</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.startDateUtc">startDateUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule">MonitorActionRuleSuppressionSuppressionSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endDateUtcInput`<sup>Optional</sup> <a name="endDateUtcInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.endDateUtcInput"></a>

```typescript
public readonly endDateUtcInput: string;
```

- *Type:* string

---

##### `recurrenceMonthlyInput`<sup>Optional</sup> <a name="recurrenceMonthlyInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceMonthlyInput"></a>

```typescript
public readonly recurrenceMonthlyInput: number[];
```

- *Type:* number[]

---

##### `recurrenceWeeklyInput`<sup>Optional</sup> <a name="recurrenceWeeklyInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceWeeklyInput"></a>

```typescript
public readonly recurrenceWeeklyInput: string[];
```

- *Type:* string[]

---

##### `startDateUtcInput`<sup>Optional</sup> <a name="startDateUtcInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.startDateUtcInput"></a>

```typescript
public readonly startDateUtcInput: string;
```

- *Type:* string

---

##### `endDateUtc`<sup>Required</sup> <a name="endDateUtc" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.endDateUtc"></a>

```typescript
public readonly endDateUtc: string;
```

- *Type:* string

---

##### `recurrenceMonthly`<sup>Required</sup> <a name="recurrenceMonthly" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceMonthly"></a>

```typescript
public readonly recurrenceMonthly: number[];
```

- *Type:* number[]

---

##### `recurrenceWeekly`<sup>Required</sup> <a name="recurrenceWeekly" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceWeekly"></a>

```typescript
public readonly recurrenceWeekly: string[];
```

- *Type:* string[]

---

##### `startDateUtc`<sup>Required</sup> <a name="startDateUtc" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.startDateUtc"></a>

```typescript
public readonly startDateUtc: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorActionRuleSuppressionSuppressionSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule">MonitorActionRuleSuppressionSuppressionSchedule</a>

---


### MonitorActionRuleSuppressionTimeoutsOutputReference <a name="MonitorActionRuleSuppressionTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitorActionRuleSuppression } from '@cdktf/provider-azurerm'

new monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionRuleSuppressionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a>

---



