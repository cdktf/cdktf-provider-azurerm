# `consumptionBudgetResourceGroup` Submodule <a name="`consumptionBudgetResourceGroup` Submodule" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsumptionBudgetResourceGroup <a name="ConsumptionBudgetResourceGroup" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group azurerm_consumption_budget_resource_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup(scope: Construct, id: string, config: ConsumptionBudgetResourceGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig">ConsumptionBudgetResourceGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig">ConsumptionBudgetResourceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putNotification">putNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimePeriod">putTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetTimeGrain">resetTimeGrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putFilter"></a>

```typescript
public putFilter(value: ConsumptionBudgetResourceGroupFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a>

---

##### `putNotification` <a name="putNotification" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putNotification"></a>

```typescript
public putNotification(value: IResolvable | ConsumptionBudgetResourceGroupNotification[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putNotification.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: ConsumptionBudgetResourceGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a>

---

##### `putTimePeriod` <a name="putTimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimePeriod"></a>

```typescript
public putTimePeriod(value: ConsumptionBudgetResourceGroupTimePeriod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a>

---

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeGrain` <a name="resetTimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetTimeGrain"></a>

```typescript
public resetTimeGrain(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConsumptionBudgetResourceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isConstruct"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformElement"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformResource"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.generateConfigForImport"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConsumptionBudgetResourceGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConsumptionBudgetResourceGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConsumptionBudgetResourceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConsumptionBudgetResourceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference">ConsumptionBudgetResourceGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList">ConsumptionBudgetResourceGroupNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference">ConsumptionBudgetResourceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timePeriod">timePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference">ConsumptionBudgetResourceGroupTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.amountInput">amountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.notificationInput">notificationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeGrainInput">timeGrainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timePeriodInput">timePeriodInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.amount">amount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.resourceGroupId">resourceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeGrain">timeGrain</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.filter"></a>

```typescript
public readonly filter: ConsumptionBudgetResourceGroupFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference">ConsumptionBudgetResourceGroupFilterOutputReference</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.notification"></a>

```typescript
public readonly notification: ConsumptionBudgetResourceGroupNotificationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList">ConsumptionBudgetResourceGroupNotificationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeouts"></a>

```typescript
public readonly timeouts: ConsumptionBudgetResourceGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference">ConsumptionBudgetResourceGroupTimeoutsOutputReference</a>

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timePeriod"></a>

```typescript
public readonly timePeriod: ConsumptionBudgetResourceGroupTimePeriodOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference">ConsumptionBudgetResourceGroupTimePeriodOutputReference</a>

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.amountInput"></a>

```typescript
public readonly amountInput: number;
```

- *Type:* number

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.filterInput"></a>

```typescript
public readonly filterInput: ConsumptionBudgetResourceGroupFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationInput`<sup>Optional</sup> <a name="notificationInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.notificationInput"></a>

```typescript
public readonly notificationInput: IResolvable | ConsumptionBudgetResourceGroupNotification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>[]

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.resourceGroupIdInput"></a>

```typescript
public readonly resourceGroupIdInput: string;
```

- *Type:* string

---

##### `timeGrainInput`<sup>Optional</sup> <a name="timeGrainInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeGrainInput"></a>

```typescript
public readonly timeGrainInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ConsumptionBudgetResourceGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a>

---

##### `timePeriodInput`<sup>Optional</sup> <a name="timePeriodInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timePeriodInput"></a>

```typescript
public readonly timePeriodInput: ConsumptionBudgetResourceGroupTimePeriod;
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.resourceGroupId"></a>

```typescript
public readonly resourceGroupId: string;
```

- *Type:* string

---

##### `timeGrain`<sup>Required</sup> <a name="timeGrain" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeGrain"></a>

```typescript
public readonly timeGrain: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConsumptionBudgetResourceGroupConfig <a name="ConsumptionBudgetResourceGroupConfig" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const consumptionBudgetResourceGroupConfig: consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.amount">amount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#amount ConsumptionBudgetResourceGroup#amount}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.notification">notification</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>[]</code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#resource_group_id ConsumptionBudgetResourceGroup#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timePeriod">timePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.etag">etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#etag ConsumptionBudgetResourceGroup#etag}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#id ConsumptionBudgetResourceGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timeGrain">timeGrain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#time_grain ConsumptionBudgetResourceGroup#time_grain}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#amount ConsumptionBudgetResourceGroup#amount}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.notification"></a>

```typescript
public readonly notification: IResolvable | ConsumptionBudgetResourceGroupNotification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>[]

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#notification ConsumptionBudgetResourceGroup#notification}

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.resourceGroupId"></a>

```typescript
public readonly resourceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#resource_group_id ConsumptionBudgetResourceGroup#resource_group_id}.

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timePeriod"></a>

```typescript
public readonly timePeriod: ConsumptionBudgetResourceGroupTimePeriod;
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#time_period ConsumptionBudgetResourceGroup#time_period}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#etag ConsumptionBudgetResourceGroup#etag}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.filter"></a>

```typescript
public readonly filter: ConsumptionBudgetResourceGroupFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#filter ConsumptionBudgetResourceGroup#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#id ConsumptionBudgetResourceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeGrain`<sup>Optional</sup> <a name="timeGrain" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timeGrain"></a>

```typescript
public readonly timeGrain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#time_grain ConsumptionBudgetResourceGroup#time_grain}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ConsumptionBudgetResourceGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#timeouts ConsumptionBudgetResourceGroup#timeouts}

---

### ConsumptionBudgetResourceGroupFilter <a name="ConsumptionBudgetResourceGroupFilter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const consumptionBudgetResourceGroupFilter: consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.dimension">dimension</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>[]</code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.tag">tag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>[]</code> | tag block. |

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.dimension"></a>

```typescript
public readonly dimension: IResolvable | ConsumptionBudgetResourceGroupFilterDimension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>[]

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#dimension ConsumptionBudgetResourceGroup#dimension}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.tag"></a>

```typescript
public readonly tag: IResolvable | ConsumptionBudgetResourceGroupFilterTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>[]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#tag ConsumptionBudgetResourceGroup#tag}

---

### ConsumptionBudgetResourceGroupFilterDimension <a name="ConsumptionBudgetResourceGroupFilterDimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const consumptionBudgetResourceGroupFilterDimension: consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

### ConsumptionBudgetResourceGroupFilterTag <a name="ConsumptionBudgetResourceGroupFilterTag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const consumptionBudgetResourceGroupFilterTag: consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

### ConsumptionBudgetResourceGroupNotification <a name="ConsumptionBudgetResourceGroupNotification" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const consumptionBudgetResourceGroupNotification: consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#threshold ConsumptionBudgetResourceGroup#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactEmails">contactEmails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#contact_emails ConsumptionBudgetResourceGroup#contact_emails}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactGroups">contactGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#contact_groups ConsumptionBudgetResourceGroup#contact_groups}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactRoles">contactRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#contact_roles ConsumptionBudgetResourceGroup#contact_roles}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#enabled ConsumptionBudgetResourceGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.thresholdType">thresholdType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#threshold_type ConsumptionBudgetResourceGroup#threshold_type}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#threshold ConsumptionBudgetResourceGroup#threshold}.

---

##### `contactEmails`<sup>Optional</sup> <a name="contactEmails" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactEmails"></a>

```typescript
public readonly contactEmails: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#contact_emails ConsumptionBudgetResourceGroup#contact_emails}.

---

##### `contactGroups`<sup>Optional</sup> <a name="contactGroups" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactGroups"></a>

```typescript
public readonly contactGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#contact_groups ConsumptionBudgetResourceGroup#contact_groups}.

---

##### `contactRoles`<sup>Optional</sup> <a name="contactRoles" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactRoles"></a>

```typescript
public readonly contactRoles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#contact_roles ConsumptionBudgetResourceGroup#contact_roles}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#enabled ConsumptionBudgetResourceGroup#enabled}.

---

##### `thresholdType`<sup>Optional</sup> <a name="thresholdType" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#threshold_type ConsumptionBudgetResourceGroup#threshold_type}.

---

### ConsumptionBudgetResourceGroupTimeouts <a name="ConsumptionBudgetResourceGroupTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const consumptionBudgetResourceGroupTimeouts: consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#create ConsumptionBudgetResourceGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#delete ConsumptionBudgetResourceGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#read ConsumptionBudgetResourceGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#update ConsumptionBudgetResourceGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#create ConsumptionBudgetResourceGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#delete ConsumptionBudgetResourceGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#read ConsumptionBudgetResourceGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#update ConsumptionBudgetResourceGroup#update}.

---

### ConsumptionBudgetResourceGroupTimePeriod <a name="ConsumptionBudgetResourceGroupTimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const consumptionBudgetResourceGroupTimePeriod: consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.property.startDate">startDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#start_date ConsumptionBudgetResourceGroup#start_date}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.property.endDate">endDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#end_date ConsumptionBudgetResourceGroup#end_date}. |

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#start_date ConsumptionBudgetResourceGroup#start_date}.

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/consumption_budget_resource_group#end_date ConsumptionBudgetResourceGroup#end_date}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConsumptionBudgetResourceGroupFilterDimensionList <a name="ConsumptionBudgetResourceGroupFilterDimensionList" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.get"></a>

```typescript
public get(index: number): ConsumptionBudgetResourceGroupFilterDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConsumptionBudgetResourceGroupFilterDimension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>[]

---


### ConsumptionBudgetResourceGroupFilterDimensionOutputReference <a name="ConsumptionBudgetResourceGroupFilterDimensionOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConsumptionBudgetResourceGroupFilterDimension;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>

---


### ConsumptionBudgetResourceGroupFilterOutputReference <a name="ConsumptionBudgetResourceGroupFilterOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimension` <a name="putDimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putDimension"></a>

```typescript
public putDimension(value: IResolvable | ConsumptionBudgetResourceGroupFilterDimension[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putDimension.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>[]

---

##### `putTag` <a name="putTag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putTag"></a>

```typescript
public putTag(value: IResolvable | ConsumptionBudgetResourceGroupFilterTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>[]

---

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList">ConsumptionBudgetResourceGroupFilterDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList">ConsumptionBudgetResourceGroupFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.dimensionInput">dimensionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.tagInput">tagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.dimension"></a>

```typescript
public readonly dimension: ConsumptionBudgetResourceGroupFilterDimensionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList">ConsumptionBudgetResourceGroupFilterDimensionList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.tag"></a>

```typescript
public readonly tag: ConsumptionBudgetResourceGroupFilterTagList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList">ConsumptionBudgetResourceGroupFilterTagList</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: IResolvable | ConsumptionBudgetResourceGroupFilterDimension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>[]

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: IResolvable | ConsumptionBudgetResourceGroupFilterTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConsumptionBudgetResourceGroupFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a>

---


### ConsumptionBudgetResourceGroupFilterTagList <a name="ConsumptionBudgetResourceGroupFilterTagList" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.get"></a>

```typescript
public get(index: number): ConsumptionBudgetResourceGroupFilterTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConsumptionBudgetResourceGroupFilterTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>[]

---


### ConsumptionBudgetResourceGroupFilterTagOutputReference <a name="ConsumptionBudgetResourceGroupFilterTagOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConsumptionBudgetResourceGroupFilterTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>

---


### ConsumptionBudgetResourceGroupNotificationList <a name="ConsumptionBudgetResourceGroupNotificationList" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.get"></a>

```typescript
public get(index: number): ConsumptionBudgetResourceGroupNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConsumptionBudgetResourceGroupNotification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>[]

---


### ConsumptionBudgetResourceGroupNotificationOutputReference <a name="ConsumptionBudgetResourceGroupNotificationOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactEmails">resetContactEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactGroups">resetContactGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactRoles">resetContactRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetThresholdType">resetThresholdType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContactEmails` <a name="resetContactEmails" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactEmails"></a>

```typescript
public resetContactEmails(): void
```

##### `resetContactGroups` <a name="resetContactGroups" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactGroups"></a>

```typescript
public resetContactGroups(): void
```

##### `resetContactRoles` <a name="resetContactRoles" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactRoles"></a>

```typescript
public resetContactRoles(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetThresholdType` <a name="resetThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetThresholdType"></a>

```typescript
public resetThresholdType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmailsInput">contactEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroupsInput">contactGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRolesInput">contactRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdTypeInput">thresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmails">contactEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroups">contactGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRoles">contactRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdType">thresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactEmailsInput`<sup>Optional</sup> <a name="contactEmailsInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmailsInput"></a>

```typescript
public readonly contactEmailsInput: string[];
```

- *Type:* string[]

---

##### `contactGroupsInput`<sup>Optional</sup> <a name="contactGroupsInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroupsInput"></a>

```typescript
public readonly contactGroupsInput: string[];
```

- *Type:* string[]

---

##### `contactRolesInput`<sup>Optional</sup> <a name="contactRolesInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRolesInput"></a>

```typescript
public readonly contactRolesInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `thresholdTypeInput`<sup>Optional</sup> <a name="thresholdTypeInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdTypeInput"></a>

```typescript
public readonly thresholdTypeInput: string;
```

- *Type:* string

---

##### `contactEmails`<sup>Required</sup> <a name="contactEmails" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmails"></a>

```typescript
public readonly contactEmails: string[];
```

- *Type:* string[]

---

##### `contactGroups`<sup>Required</sup> <a name="contactGroups" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroups"></a>

```typescript
public readonly contactGroups: string[];
```

- *Type:* string[]

---

##### `contactRoles`<sup>Required</sup> <a name="contactRoles" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRoles"></a>

```typescript
public readonly contactRoles: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConsumptionBudgetResourceGroupNotification;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>

---


### ConsumptionBudgetResourceGroupTimeoutsOutputReference <a name="ConsumptionBudgetResourceGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConsumptionBudgetResourceGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a>

---


### ConsumptionBudgetResourceGroupTimePeriodOutputReference <a name="ConsumptionBudgetResourceGroupTimePeriodOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer"></a>

```typescript
import { consumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resetEndDate">resetEndDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndDate` <a name="resetEndDate" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resetEndDate"></a>

```typescript
public resetEndDate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDateInput">endDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDateInput">startDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDateInput"></a>

```typescript
public readonly endDateInput: string;
```

- *Type:* string

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConsumptionBudgetResourceGroupTimePeriod;
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a>

---



