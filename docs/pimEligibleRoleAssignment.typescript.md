# `pimEligibleRoleAssignment` Submodule <a name="`pimEligibleRoleAssignment` Submodule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PimEligibleRoleAssignment <a name="PimEligibleRoleAssignment" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment azurerm_pim_eligible_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer"></a>

```typescript
import { pimEligibleRoleAssignment } from '@cdktf/provider-azurerm'

new pimEligibleRoleAssignment.PimEligibleRoleAssignment(scope: Construct, id: string, config: PimEligibleRoleAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig">PimEligibleRoleAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig">PimEligibleRoleAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTicket">putTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetConditionVersion">resetConditionVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetJustification">resetJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetTicket">resetTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putSchedule"></a>

```typescript
public putSchedule(value: PimEligibleRoleAssignmentSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a>

---

##### `putTicket` <a name="putTicket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTicket"></a>

```typescript
public putTicket(value: PimEligibleRoleAssignmentTicket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTicket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: PimEligibleRoleAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts">PimEligibleRoleAssignmentTimeouts</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetConditionVersion` <a name="resetConditionVersion" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetConditionVersion"></a>

```typescript
public resetConditionVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJustification` <a name="resetJustification" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetJustification"></a>

```typescript
public resetJustification(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetTicket` <a name="resetTicket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetTicket"></a>

```typescript
public resetTicket(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PimEligibleRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isConstruct"></a>

```typescript
import { pimEligibleRoleAssignment } from '@cdktf/provider-azurerm'

pimEligibleRoleAssignment.PimEligibleRoleAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformElement"></a>

```typescript
import { pimEligibleRoleAssignment } from '@cdktf/provider-azurerm'

pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformResource"></a>

```typescript
import { pimEligibleRoleAssignment } from '@cdktf/provider-azurerm'

pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport"></a>

```typescript
import { pimEligibleRoleAssignment } from '@cdktf/provider-azurerm'

pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PimEligibleRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PimEligibleRoleAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PimEligibleRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PimEligibleRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference">PimEligibleRoleAssignmentScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.ticket">ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference">PimEligibleRoleAssignmentTicketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference">PimEligibleRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.conditionVersionInput">conditionVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.justificationInput">justificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalIdInput">principalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.roleDefinitionIdInput">roleDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.ticketInput">ticketInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts">PimEligibleRoleAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.conditionVersion">conditionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.justification">justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.roleDefinitionId">roleDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.schedule"></a>

```typescript
public readonly schedule: PimEligibleRoleAssignmentScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference">PimEligibleRoleAssignmentScheduleOutputReference</a>

---

##### `ticket`<sup>Required</sup> <a name="ticket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.ticket"></a>

```typescript
public readonly ticket: PimEligibleRoleAssignmentTicketOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference">PimEligibleRoleAssignmentTicketOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: PimEligibleRoleAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference">PimEligibleRoleAssignmentTimeoutsOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `conditionVersionInput`<sup>Optional</sup> <a name="conditionVersionInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.conditionVersionInput"></a>

```typescript
public readonly conditionVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `justificationInput`<sup>Optional</sup> <a name="justificationInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.justificationInput"></a>

```typescript
public readonly justificationInput: string;
```

- *Type:* string

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalIdInput"></a>

```typescript
public readonly principalIdInput: string;
```

- *Type:* string

---

##### `roleDefinitionIdInput`<sup>Optional</sup> <a name="roleDefinitionIdInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.roleDefinitionIdInput"></a>

```typescript
public readonly roleDefinitionIdInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: PimEligibleRoleAssignmentSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `ticketInput`<sup>Optional</sup> <a name="ticketInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.ticketInput"></a>

```typescript
public readonly ticketInput: PimEligibleRoleAssignmentTicket;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PimEligibleRoleAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts">PimEligibleRoleAssignmentTimeouts</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `conditionVersion`<sup>Required</sup> <a name="conditionVersion" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.conditionVersion"></a>

```typescript
public readonly conditionVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `justification`<sup>Required</sup> <a name="justification" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.roleDefinitionId"></a>

```typescript
public readonly roleDefinitionId: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PimEligibleRoleAssignmentConfig <a name="PimEligibleRoleAssignmentConfig" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.Initializer"></a>

```typescript
import { pimEligibleRoleAssignment } from '@cdktf/provider-azurerm'

const pimEligibleRoleAssignmentConfig: pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.principalId">principalId</a></code> | <code>string</code> | Object ID of the principal for this eligible role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.roleDefinitionId">roleDefinitionId</a></code> | <code>string</code> | Role definition ID for this eligible role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.scope">scope</a></code> | <code>string</code> | Scope for this eligible role assignment, should be a valid resource ID. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#condition PimEligibleRoleAssignment#condition}. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.conditionVersion">conditionVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#condition_version PimEligibleRoleAssignment#condition_version}. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#id PimEligibleRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.justification">justification</a></code> | <code>string</code> | The justification for this eligible role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.ticket">ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a></code> | ticket block. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts">PimEligibleRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

Object ID of the principal for this eligible role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#principal_id PimEligibleRoleAssignment#principal_id}

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.roleDefinitionId"></a>

```typescript
public readonly roleDefinitionId: string;
```

- *Type:* string

Role definition ID for this eligible role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#role_definition_id PimEligibleRoleAssignment#role_definition_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Scope for this eligible role assignment, should be a valid resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#scope PimEligibleRoleAssignment#scope}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#condition PimEligibleRoleAssignment#condition}.

---

##### `conditionVersion`<sup>Optional</sup> <a name="conditionVersion" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.conditionVersion"></a>

```typescript
public readonly conditionVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#condition_version PimEligibleRoleAssignment#condition_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#id PimEligibleRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

The justification for this eligible role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#justification PimEligibleRoleAssignment#justification}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.schedule"></a>

```typescript
public readonly schedule: PimEligibleRoleAssignmentSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#schedule PimEligibleRoleAssignment#schedule}

---

##### `ticket`<sup>Optional</sup> <a name="ticket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.ticket"></a>

```typescript
public readonly ticket: PimEligibleRoleAssignmentTicket;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a>

ticket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#ticket PimEligibleRoleAssignment#ticket}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PimEligibleRoleAssignmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts">PimEligibleRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#timeouts PimEligibleRoleAssignment#timeouts}

---

### PimEligibleRoleAssignmentSchedule <a name="PimEligibleRoleAssignmentSchedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.Initializer"></a>

```typescript
import { pimEligibleRoleAssignment } from '@cdktf/provider-azurerm'

const pimEligibleRoleAssignmentSchedule: pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.property.startDateTime">startDateTime</a></code> | <code>string</code> | The start date/time. |

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.property.expiration"></a>

```typescript
public readonly expiration: PimEligibleRoleAssignmentScheduleExpiration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#expiration PimEligibleRoleAssignment#expiration}

---

##### `startDateTime`<sup>Optional</sup> <a name="startDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.property.startDateTime"></a>

```typescript
public readonly startDateTime: string;
```

- *Type:* string

The start date/time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#start_date_time PimEligibleRoleAssignment#start_date_time}

---

### PimEligibleRoleAssignmentScheduleExpiration <a name="PimEligibleRoleAssignmentScheduleExpiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.Initializer"></a>

```typescript
import { pimEligibleRoleAssignment } from '@cdktf/provider-azurerm'

const pimEligibleRoleAssignmentScheduleExpiration: pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.durationDays">durationDays</a></code> | <code>number</code> | The duration of the eligible role assignment in days. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.durationHours">durationHours</a></code> | <code>number</code> | The duration of the eligible role assignment in hours. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.endDateTime">endDateTime</a></code> | <code>string</code> | The end date/time of the eligible role assignment. |

---

##### `durationDays`<sup>Optional</sup> <a name="durationDays" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.durationDays"></a>

```typescript
public readonly durationDays: number;
```

- *Type:* number

The duration of the eligible role assignment in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#duration_days PimEligibleRoleAssignment#duration_days}

---

##### `durationHours`<sup>Optional</sup> <a name="durationHours" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.durationHours"></a>

```typescript
public readonly durationHours: number;
```

- *Type:* number

The duration of the eligible role assignment in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#duration_hours PimEligibleRoleAssignment#duration_hours}

---

##### `endDateTime`<sup>Optional</sup> <a name="endDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.endDateTime"></a>

```typescript
public readonly endDateTime: string;
```

- *Type:* string

The end date/time of the eligible role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#end_date_time PimEligibleRoleAssignment#end_date_time}

---

### PimEligibleRoleAssignmentTicket <a name="PimEligibleRoleAssignmentTicket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.Initializer"></a>

```typescript
import { pimEligibleRoleAssignment } from '@cdktf/provider-azurerm'

const pimEligibleRoleAssignmentTicket: pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.property.number">number</a></code> | <code>string</code> | User-supplied ticket number to be included with the request. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.property.systemAttribute">systemAttribute</a></code> | <code>string</code> | User-supplied ticket system name to be included with the request. |

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.property.number"></a>

```typescript
public readonly number: string;
```

- *Type:* string

User-supplied ticket number to be included with the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#number PimEligibleRoleAssignment#number}

---

##### `systemAttribute`<sup>Optional</sup> <a name="systemAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.property.systemAttribute"></a>

```typescript
public readonly systemAttribute: string;
```

- *Type:* string

User-supplied ticket system name to be included with the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#system PimEligibleRoleAssignment#system}

---

### PimEligibleRoleAssignmentTimeouts <a name="PimEligibleRoleAssignmentTimeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.Initializer"></a>

```typescript
import { pimEligibleRoleAssignment } from '@cdktf/provider-azurerm'

const pimEligibleRoleAssignmentTimeouts: pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#create PimEligibleRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#delete PimEligibleRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#read PimEligibleRoleAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#create PimEligibleRoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#delete PimEligibleRoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/pim_eligible_role_assignment#read PimEligibleRoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PimEligibleRoleAssignmentScheduleExpirationOutputReference <a name="PimEligibleRoleAssignmentScheduleExpirationOutputReference" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer"></a>

```typescript
import { pimEligibleRoleAssignment } from '@cdktf/provider-azurerm'

new pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetDurationDays">resetDurationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetDurationHours">resetDurationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetEndDateTime">resetEndDateTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationDays` <a name="resetDurationDays" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetDurationDays"></a>

```typescript
public resetDurationDays(): void
```

##### `resetDurationHours` <a name="resetDurationHours" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetDurationHours"></a>

```typescript
public resetDurationHours(): void
```

##### `resetEndDateTime` <a name="resetEndDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetEndDateTime"></a>

```typescript
public resetEndDateTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationDaysInput">durationDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationHoursInput">durationHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.endDateTimeInput">endDateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationDays">durationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationHours">durationHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.endDateTime">endDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationDaysInput`<sup>Optional</sup> <a name="durationDaysInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationDaysInput"></a>

```typescript
public readonly durationDaysInput: number;
```

- *Type:* number

---

##### `durationHoursInput`<sup>Optional</sup> <a name="durationHoursInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationHoursInput"></a>

```typescript
public readonly durationHoursInput: number;
```

- *Type:* number

---

##### `endDateTimeInput`<sup>Optional</sup> <a name="endDateTimeInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.endDateTimeInput"></a>

```typescript
public readonly endDateTimeInput: string;
```

- *Type:* string

---

##### `durationDays`<sup>Required</sup> <a name="durationDays" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationDays"></a>

```typescript
public readonly durationDays: number;
```

- *Type:* number

---

##### `durationHours`<sup>Required</sup> <a name="durationHours" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationHours"></a>

```typescript
public readonly durationHours: number;
```

- *Type:* number

---

##### `endDateTime`<sup>Required</sup> <a name="endDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.endDateTime"></a>

```typescript
public readonly endDateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PimEligibleRoleAssignmentScheduleExpiration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a>

---


### PimEligibleRoleAssignmentScheduleOutputReference <a name="PimEligibleRoleAssignmentScheduleOutputReference" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer"></a>

```typescript
import { pimEligibleRoleAssignment } from '@cdktf/provider-azurerm'

new pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.putExpiration">putExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resetStartDateTime">resetStartDateTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpiration` <a name="putExpiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.putExpiration"></a>

```typescript
public putExpiration(value: PimEligibleRoleAssignmentScheduleExpiration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a>

---

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetStartDateTime` <a name="resetStartDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resetStartDateTime"></a>

```typescript
public resetStartDateTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference">PimEligibleRoleAssignmentScheduleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.expirationInput">expirationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.startDateTimeInput">startDateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.startDateTime">startDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.expiration"></a>

```typescript
public readonly expiration: PimEligibleRoleAssignmentScheduleExpirationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference">PimEligibleRoleAssignmentScheduleExpirationOutputReference</a>

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.expirationInput"></a>

```typescript
public readonly expirationInput: PimEligibleRoleAssignmentScheduleExpiration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a>

---

##### `startDateTimeInput`<sup>Optional</sup> <a name="startDateTimeInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.startDateTimeInput"></a>

```typescript
public readonly startDateTimeInput: string;
```

- *Type:* string

---

##### `startDateTime`<sup>Required</sup> <a name="startDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.startDateTime"></a>

```typescript
public readonly startDateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PimEligibleRoleAssignmentSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a>

---


### PimEligibleRoleAssignmentTicketOutputReference <a name="PimEligibleRoleAssignmentTicketOutputReference" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer"></a>

```typescript
import { pimEligibleRoleAssignment } from '@cdktf/provider-azurerm'

new pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resetNumber">resetNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resetSystemAttribute">resetSystemAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumber` <a name="resetNumber" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resetNumber"></a>

```typescript
public resetNumber(): void
```

##### `resetSystemAttribute` <a name="resetSystemAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resetSystemAttribute"></a>

```typescript
public resetSystemAttribute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.numberInput">numberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.systemAttributeInput">systemAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.number">number</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.systemAttribute">systemAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.numberInput"></a>

```typescript
public readonly numberInput: string;
```

- *Type:* string

---

##### `systemAttributeInput`<sup>Optional</sup> <a name="systemAttributeInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.systemAttributeInput"></a>

```typescript
public readonly systemAttributeInput: string;
```

- *Type:* string

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.number"></a>

```typescript
public readonly number: string;
```

- *Type:* string

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.systemAttribute"></a>

```typescript
public readonly systemAttribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PimEligibleRoleAssignmentTicket;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a>

---


### PimEligibleRoleAssignmentTimeoutsOutputReference <a name="PimEligibleRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { pimEligibleRoleAssignment } from '@cdktf/provider-azurerm'

new pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts">PimEligibleRoleAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PimEligibleRoleAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts">PimEligibleRoleAssignmentTimeouts</a>

---



