# `costManagementScheduledAction` Submodule <a name="`costManagementScheduledAction` Submodule" id="@cdktf/provider-azurerm.costManagementScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostManagementScheduledAction <a name="CostManagementScheduledAction" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action azurerm_cost_management_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer"></a>

```typescript
import { costManagementScheduledAction } from '@cdktf/provider-azurerm'

new costManagementScheduledAction.CostManagementScheduledAction(scope: Construct, id: string, config: CostManagementScheduledActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig">CostManagementScheduledActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig">CostManagementScheduledActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetDayOfMonth">resetDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetHourOfDay">resetHourOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.putTimeouts"></a>

```typescript
public putTimeouts(value: CostManagementScheduledActionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a>

---

##### `resetDayOfMonth` <a name="resetDayOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetDayOfMonth"></a>

```typescript
public resetDayOfMonth(): void
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetHourOfDay` <a name="resetHourOfDay" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetHourOfDay"></a>

```typescript
public resetHourOfDay(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetWeeksOfMonth"></a>

```typescript
public resetWeeksOfMonth(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CostManagementScheduledAction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isConstruct"></a>

```typescript
import { costManagementScheduledAction } from '@cdktf/provider-azurerm'

costManagementScheduledAction.CostManagementScheduledAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformElement"></a>

```typescript
import { costManagementScheduledAction } from '@cdktf/provider-azurerm'

costManagementScheduledAction.CostManagementScheduledAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformResource"></a>

```typescript
import { costManagementScheduledAction } from '@cdktf/provider-azurerm'

costManagementScheduledAction.CostManagementScheduledAction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport"></a>

```typescript
import { costManagementScheduledAction } from '@cdktf/provider-azurerm'

costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CostManagementScheduledAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CostManagementScheduledAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CostManagementScheduledAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CostManagementScheduledAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference">CostManagementScheduledActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dayOfMonthInput">dayOfMonthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressesInput">emailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressSenderInput">emailAddressSenderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailSubjectInput">emailSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.endDateInput">endDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.hourOfDayInput">hourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.startDateInput">startDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.viewIdInput">viewIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dayOfMonth">dayOfMonth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressSender">emailAddressSender</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailSubject">emailSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.viewId">viewId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.weeksOfMonth">weeksOfMonth</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.timeouts"></a>

```typescript
public readonly timeouts: CostManagementScheduledActionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference">CostManagementScheduledActionTimeoutsOutputReference</a>

---

##### `dayOfMonthInput`<sup>Optional</sup> <a name="dayOfMonthInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dayOfMonthInput"></a>

```typescript
public readonly dayOfMonthInput: number;
```

- *Type:* number

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressesInput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* string[]

---

##### `emailAddressSenderInput`<sup>Optional</sup> <a name="emailAddressSenderInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressSenderInput"></a>

```typescript
public readonly emailAddressSenderInput: string;
```

- *Type:* string

---

##### `emailSubjectInput`<sup>Optional</sup> <a name="emailSubjectInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailSubjectInput"></a>

```typescript
public readonly emailSubjectInput: string;
```

- *Type:* string

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.endDateInput"></a>

```typescript
public readonly endDateInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.hourOfDayInput"></a>

```typescript
public readonly hourOfDayInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CostManagementScheduledActionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a>

---

##### `viewIdInput`<sup>Optional</sup> <a name="viewIdInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.viewIdInput"></a>

```typescript
public readonly viewIdInput: string;
```

- *Type:* string

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.weeksOfMonthInput"></a>

```typescript
public readonly weeksOfMonthInput: string[];
```

- *Type:* string[]

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: number;
```

- *Type:* number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

---

##### `emailAddressSender`<sup>Required</sup> <a name="emailAddressSender" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressSender"></a>

```typescript
public readonly emailAddressSender: string;
```

- *Type:* string

---

##### `emailSubject`<sup>Required</sup> <a name="emailSubject" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailSubject"></a>

```typescript
public readonly emailSubject: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CostManagementScheduledActionConfig <a name="CostManagementScheduledActionConfig" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.Initializer"></a>

```typescript
import { costManagementScheduledAction } from '@cdktf/provider-azurerm'

const costManagementScheduledActionConfig: costManagementScheduledAction.CostManagementScheduledActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#display_name CostManagementScheduledAction#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#email_addresses CostManagementScheduledAction#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailAddressSender">emailAddressSender</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#email_address_sender CostManagementScheduledAction#email_address_sender}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailSubject">emailSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#email_subject CostManagementScheduledAction#email_subject}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.endDate">endDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#end_date CostManagementScheduledAction#end_date}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#frequency CostManagementScheduledAction#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#name CostManagementScheduledAction#name}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.startDate">startDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#start_date CostManagementScheduledAction#start_date}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.viewId">viewId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#view_id CostManagementScheduledAction#view_id}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.dayOfMonth">dayOfMonth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#day_of_month CostManagementScheduledAction#day_of_month}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#days_of_week CostManagementScheduledAction#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#hour_of_day CostManagementScheduledAction#hour_of_day}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#id CostManagementScheduledAction#id}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#message CostManagementScheduledAction#message}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.weeksOfMonth">weeksOfMonth</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#weeks_of_month CostManagementScheduledAction#weeks_of_month}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#display_name CostManagementScheduledAction#display_name}.

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#email_addresses CostManagementScheduledAction#email_addresses}.

---

##### `emailAddressSender`<sup>Required</sup> <a name="emailAddressSender" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailAddressSender"></a>

```typescript
public readonly emailAddressSender: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#email_address_sender CostManagementScheduledAction#email_address_sender}.

---

##### `emailSubject`<sup>Required</sup> <a name="emailSubject" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailSubject"></a>

```typescript
public readonly emailSubject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#email_subject CostManagementScheduledAction#email_subject}.

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#end_date CostManagementScheduledAction#end_date}.

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#frequency CostManagementScheduledAction#frequency}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#name CostManagementScheduledAction#name}.

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#start_date CostManagementScheduledAction#start_date}.

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#view_id CostManagementScheduledAction#view_id}.

---

##### `dayOfMonth`<sup>Optional</sup> <a name="dayOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#day_of_month CostManagementScheduledAction#day_of_month}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#days_of_week CostManagementScheduledAction#days_of_week}.

---

##### `hourOfDay`<sup>Optional</sup> <a name="hourOfDay" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#hour_of_day CostManagementScheduledAction#hour_of_day}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#id CostManagementScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#message CostManagementScheduledAction#message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CostManagementScheduledActionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#timeouts CostManagementScheduledAction#timeouts}

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#weeks_of_month CostManagementScheduledAction#weeks_of_month}.

---

### CostManagementScheduledActionTimeouts <a name="CostManagementScheduledActionTimeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.Initializer"></a>

```typescript
import { costManagementScheduledAction } from '@cdktf/provider-azurerm'

const costManagementScheduledActionTimeouts: costManagementScheduledAction.CostManagementScheduledActionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#create CostManagementScheduledAction#create}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#delete CostManagementScheduledAction#delete}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#read CostManagementScheduledAction#read}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#update CostManagementScheduledAction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#create CostManagementScheduledAction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#delete CostManagementScheduledAction#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#read CostManagementScheduledAction#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/cost_management_scheduled_action#update CostManagementScheduledAction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CostManagementScheduledActionTimeoutsOutputReference <a name="CostManagementScheduledActionTimeoutsOutputReference" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer"></a>

```typescript
import { costManagementScheduledAction } from '@cdktf/provider-azurerm'

new costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostManagementScheduledActionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a>

---



