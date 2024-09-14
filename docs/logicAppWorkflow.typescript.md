# `logicAppWorkflow` Submodule <a name="`logicAppWorkflow` Submodule" id="@cdktf/provider-azurerm.logicAppWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppWorkflow <a name="LogicAppWorkflow" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow azurerm_logic_app_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

new logicAppWorkflow.LogicAppWorkflow(scope: Construct, id: string, config: LogicAppWorkflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig">LogicAppWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig">LogicAppWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putAccessControl">putAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetAccessControl">resetAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetIntegrationServiceEnvironmentId">resetIntegrationServiceEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetLogicAppIntegrationAccountId">resetLogicAppIntegrationAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowParameters">resetWorkflowParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowSchema">resetWorkflowSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowVersion">resetWorkflowVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessControl` <a name="putAccessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putAccessControl"></a>

```typescript
public putAccessControl(value: LogicAppWorkflowAccessControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putIdentity"></a>

```typescript
public putIdentity(value: LogicAppWorkflowIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putTimeouts"></a>

```typescript
public putTimeouts(value: LogicAppWorkflowTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts">LogicAppWorkflowTimeouts</a>

---

##### `resetAccessControl` <a name="resetAccessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetAccessControl"></a>

```typescript
public resetAccessControl(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetIntegrationServiceEnvironmentId` <a name="resetIntegrationServiceEnvironmentId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetIntegrationServiceEnvironmentId"></a>

```typescript
public resetIntegrationServiceEnvironmentId(): void
```

##### `resetLogicAppIntegrationAccountId` <a name="resetLogicAppIntegrationAccountId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetLogicAppIntegrationAccountId"></a>

```typescript
public resetLogicAppIntegrationAccountId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkflowParameters` <a name="resetWorkflowParameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowParameters"></a>

```typescript
public resetWorkflowParameters(): void
```

##### `resetWorkflowSchema` <a name="resetWorkflowSchema" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowSchema"></a>

```typescript
public resetWorkflowSchema(): void
```

##### `resetWorkflowVersion` <a name="resetWorkflowVersion" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowVersion"></a>

```typescript
public resetWorkflowVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogicAppWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isConstruct"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

logicAppWorkflow.LogicAppWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformElement"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

logicAppWorkflow.LogicAppWorkflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformResource"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

logicAppWorkflow.LogicAppWorkflow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.generateConfigForImport"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

logicAppWorkflow.LogicAppWorkflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LogicAppWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogicAppWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogicAppWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogicAppWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessControl">accessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference">LogicAppWorkflowAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessEndpoint">accessEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connectorEndpointIpAddresses">connectorEndpointIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connectorOutboundIpAddresses">connectorOutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference">LogicAppWorkflowIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference">LogicAppWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowEndpointIpAddresses">workflowEndpointIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowOutboundIpAddresses">workflowOutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessControlInput">accessControlInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.integrationServiceEnvironmentIdInput">integrationServiceEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.logicAppIntegrationAccountIdInput">logicAppIntegrationAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts">LogicAppWorkflowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowParametersInput">workflowParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowSchemaInput">workflowSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowVersionInput">workflowVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.integrationServiceEnvironmentId">integrationServiceEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.logicAppIntegrationAccountId">logicAppIntegrationAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowParameters">workflowParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowSchema">workflowSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowVersion">workflowVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessControl`<sup>Required</sup> <a name="accessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessControl"></a>

```typescript
public readonly accessControl: LogicAppWorkflowAccessControlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference">LogicAppWorkflowAccessControlOutputReference</a>

---

##### `accessEndpoint`<sup>Required</sup> <a name="accessEndpoint" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessEndpoint"></a>

```typescript
public readonly accessEndpoint: string;
```

- *Type:* string

---

##### `connectorEndpointIpAddresses`<sup>Required</sup> <a name="connectorEndpointIpAddresses" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connectorEndpointIpAddresses"></a>

```typescript
public readonly connectorEndpointIpAddresses: string[];
```

- *Type:* string[]

---

##### `connectorOutboundIpAddresses`<sup>Required</sup> <a name="connectorOutboundIpAddresses" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connectorOutboundIpAddresses"></a>

```typescript
public readonly connectorOutboundIpAddresses: string[];
```

- *Type:* string[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.identity"></a>

```typescript
public readonly identity: LogicAppWorkflowIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference">LogicAppWorkflowIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.timeouts"></a>

```typescript
public readonly timeouts: LogicAppWorkflowTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference">LogicAppWorkflowTimeoutsOutputReference</a>

---

##### `workflowEndpointIpAddresses`<sup>Required</sup> <a name="workflowEndpointIpAddresses" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowEndpointIpAddresses"></a>

```typescript
public readonly workflowEndpointIpAddresses: string[];
```

- *Type:* string[]

---

##### `workflowOutboundIpAddresses`<sup>Required</sup> <a name="workflowOutboundIpAddresses" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowOutboundIpAddresses"></a>

```typescript
public readonly workflowOutboundIpAddresses: string[];
```

- *Type:* string[]

---

##### `accessControlInput`<sup>Optional</sup> <a name="accessControlInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessControlInput"></a>

```typescript
public readonly accessControlInput: LogicAppWorkflowAccessControl;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.identityInput"></a>

```typescript
public readonly identityInput: LogicAppWorkflowIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationServiceEnvironmentIdInput`<sup>Optional</sup> <a name="integrationServiceEnvironmentIdInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.integrationServiceEnvironmentIdInput"></a>

```typescript
public readonly integrationServiceEnvironmentIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logicAppIntegrationAccountIdInput`<sup>Optional</sup> <a name="logicAppIntegrationAccountIdInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.logicAppIntegrationAccountIdInput"></a>

```typescript
public readonly logicAppIntegrationAccountIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LogicAppWorkflowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts">LogicAppWorkflowTimeouts</a>

---

##### `workflowParametersInput`<sup>Optional</sup> <a name="workflowParametersInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowParametersInput"></a>

```typescript
public readonly workflowParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workflowSchemaInput`<sup>Optional</sup> <a name="workflowSchemaInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowSchemaInput"></a>

```typescript
public readonly workflowSchemaInput: string;
```

- *Type:* string

---

##### `workflowVersionInput`<sup>Optional</sup> <a name="workflowVersionInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowVersionInput"></a>

```typescript
public readonly workflowVersionInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationServiceEnvironmentId`<sup>Required</sup> <a name="integrationServiceEnvironmentId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.integrationServiceEnvironmentId"></a>

```typescript
public readonly integrationServiceEnvironmentId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logicAppIntegrationAccountId`<sup>Required</sup> <a name="logicAppIntegrationAccountId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.logicAppIntegrationAccountId"></a>

```typescript
public readonly logicAppIntegrationAccountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workflowParameters`<sup>Required</sup> <a name="workflowParameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowParameters"></a>

```typescript
public readonly workflowParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workflowSchema`<sup>Required</sup> <a name="workflowSchema" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowSchema"></a>

```typescript
public readonly workflowSchema: string;
```

- *Type:* string

---

##### `workflowVersion`<sup>Required</sup> <a name="workflowVersion" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowVersion"></a>

```typescript
public readonly workflowVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppWorkflowAccessControl <a name="LogicAppWorkflowAccessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

const logicAppWorkflowAccessControl: logicAppWorkflow.LogicAppWorkflowAccessControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.content">content</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a></code> | content block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a></code> | trigger block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.workflowManagement">workflowManagement</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a></code> | workflow_management block. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.action"></a>

```typescript
public readonly action: LogicAppWorkflowAccessControlAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#action LogicAppWorkflow#action}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.content"></a>

```typescript
public readonly content: LogicAppWorkflowAccessControlContent;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#content LogicAppWorkflow#content}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.trigger"></a>

```typescript
public readonly trigger: LogicAppWorkflowAccessControlTrigger;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#trigger LogicAppWorkflow#trigger}

---

##### `workflowManagement`<sup>Optional</sup> <a name="workflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.workflowManagement"></a>

```typescript
public readonly workflowManagement: LogicAppWorkflowAccessControlWorkflowManagement;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a>

workflow_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#workflow_management LogicAppWorkflow#workflow_management}

---

### LogicAppWorkflowAccessControlAction <a name="LogicAppWorkflowAccessControlAction" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

const logicAppWorkflowAccessControlAction: logicAppWorkflow.LogicAppWorkflowAccessControlAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction.property.allowedCallerIpAddressRange">allowedCallerIpAddressRange</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}. |

---

##### `allowedCallerIpAddressRange`<sup>Required</sup> <a name="allowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction.property.allowedCallerIpAddressRange"></a>

```typescript
public readonly allowedCallerIpAddressRange: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}.

---

### LogicAppWorkflowAccessControlContent <a name="LogicAppWorkflowAccessControlContent" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

const logicAppWorkflowAccessControlContent: logicAppWorkflow.LogicAppWorkflowAccessControlContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent.property.allowedCallerIpAddressRange">allowedCallerIpAddressRange</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}. |

---

##### `allowedCallerIpAddressRange`<sup>Required</sup> <a name="allowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent.property.allowedCallerIpAddressRange"></a>

```typescript
public readonly allowedCallerIpAddressRange: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}.

---

### LogicAppWorkflowAccessControlTrigger <a name="LogicAppWorkflowAccessControlTrigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

const logicAppWorkflowAccessControlTrigger: logicAppWorkflow.LogicAppWorkflowAccessControlTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.property.allowedCallerIpAddressRange">allowedCallerIpAddressRange</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.property.openAuthenticationPolicy">openAuthenticationPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy</a>[]</code> | open_authentication_policy block. |

---

##### `allowedCallerIpAddressRange`<sup>Required</sup> <a name="allowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.property.allowedCallerIpAddressRange"></a>

```typescript
public readonly allowedCallerIpAddressRange: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}.

---

##### `openAuthenticationPolicy`<sup>Optional</sup> <a name="openAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.property.openAuthenticationPolicy"></a>

```typescript
public readonly openAuthenticationPolicy: IResolvable | LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy</a>[]

open_authentication_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#open_authentication_policy LogicAppWorkflow#open_authentication_policy}

---

### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

const logicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy: logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.property.claim">claim</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim</a>[]</code> | claim block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}. |

---

##### `claim`<sup>Required</sup> <a name="claim" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.property.claim"></a>

```typescript
public readonly claim: IResolvable | LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim</a>[]

claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#claim LogicAppWorkflow#claim}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}.

---

### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

const logicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim: logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#value LogicAppWorkflow#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#value LogicAppWorkflow#value}.

---

### LogicAppWorkflowAccessControlWorkflowManagement <a name="LogicAppWorkflowAccessControlWorkflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

const logicAppWorkflowAccessControlWorkflowManagement: logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement.property.allowedCallerIpAddressRange">allowedCallerIpAddressRange</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}. |

---

##### `allowedCallerIpAddressRange`<sup>Required</sup> <a name="allowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement.property.allowedCallerIpAddressRange"></a>

```typescript
public readonly allowedCallerIpAddressRange: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}.

---

### LogicAppWorkflowConfig <a name="LogicAppWorkflowConfig" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

const logicAppWorkflowConfig: logicAppWorkflow.LogicAppWorkflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#location LogicAppWorkflow#location}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#resource_group_name LogicAppWorkflow#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.accessControl">accessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a></code> | access_control block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#enabled LogicAppWorkflow#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#id LogicAppWorkflow#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.integrationServiceEnvironmentId">integrationServiceEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#integration_service_environment_id LogicAppWorkflow#integration_service_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.logicAppIntegrationAccountId">logicAppIntegrationAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#logic_app_integration_account_id LogicAppWorkflow#logic_app_integration_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#parameters LogicAppWorkflow#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#tags LogicAppWorkflow#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts">LogicAppWorkflowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowParameters">workflowParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#workflow_parameters LogicAppWorkflow#workflow_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowSchema">workflowSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#workflow_schema LogicAppWorkflow#workflow_schema}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowVersion">workflowVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#workflow_version LogicAppWorkflow#workflow_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#location LogicAppWorkflow#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#resource_group_name LogicAppWorkflow#resource_group_name}.

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.accessControl"></a>

```typescript
public readonly accessControl: LogicAppWorkflowAccessControl;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a>

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#access_control LogicAppWorkflow#access_control}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#enabled LogicAppWorkflow#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#id LogicAppWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.identity"></a>

```typescript
public readonly identity: LogicAppWorkflowIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#identity LogicAppWorkflow#identity}

---

##### `integrationServiceEnvironmentId`<sup>Optional</sup> <a name="integrationServiceEnvironmentId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.integrationServiceEnvironmentId"></a>

```typescript
public readonly integrationServiceEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#integration_service_environment_id LogicAppWorkflow#integration_service_environment_id}.

---

##### `logicAppIntegrationAccountId`<sup>Optional</sup> <a name="logicAppIntegrationAccountId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.logicAppIntegrationAccountId"></a>

```typescript
public readonly logicAppIntegrationAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#logic_app_integration_account_id LogicAppWorkflow#logic_app_integration_account_id}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#parameters LogicAppWorkflow#parameters}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#tags LogicAppWorkflow#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LogicAppWorkflowTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts">LogicAppWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#timeouts LogicAppWorkflow#timeouts}

---

##### `workflowParameters`<sup>Optional</sup> <a name="workflowParameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowParameters"></a>

```typescript
public readonly workflowParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#workflow_parameters LogicAppWorkflow#workflow_parameters}.

---

##### `workflowSchema`<sup>Optional</sup> <a name="workflowSchema" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowSchema"></a>

```typescript
public readonly workflowSchema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#workflow_schema LogicAppWorkflow#workflow_schema}.

---

##### `workflowVersion`<sup>Optional</sup> <a name="workflowVersion" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowVersion"></a>

```typescript
public readonly workflowVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#workflow_version LogicAppWorkflow#workflow_version}.

---

### LogicAppWorkflowIdentity <a name="LogicAppWorkflowIdentity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

const logicAppWorkflowIdentity: logicAppWorkflow.LogicAppWorkflowIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#type LogicAppWorkflow#type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#identity_ids LogicAppWorkflow#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#type LogicAppWorkflow#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#identity_ids LogicAppWorkflow#identity_ids}.

---

### LogicAppWorkflowTimeouts <a name="LogicAppWorkflowTimeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

const logicAppWorkflowTimeouts: logicAppWorkflow.LogicAppWorkflowTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#create LogicAppWorkflow#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#delete LogicAppWorkflow#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#read LogicAppWorkflow#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#update LogicAppWorkflow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#create LogicAppWorkflow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#delete LogicAppWorkflow#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#read LogicAppWorkflow#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/logic_app_workflow#update LogicAppWorkflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppWorkflowAccessControlActionOutputReference <a name="LogicAppWorkflowAccessControlActionOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

new logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.allowedCallerIpAddressRangeInput">allowedCallerIpAddressRangeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.allowedCallerIpAddressRange">allowedCallerIpAddressRange</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedCallerIpAddressRangeInput`<sup>Optional</sup> <a name="allowedCallerIpAddressRangeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.allowedCallerIpAddressRangeInput"></a>

```typescript
public readonly allowedCallerIpAddressRangeInput: string[];
```

- *Type:* string[]

---

##### `allowedCallerIpAddressRange`<sup>Required</sup> <a name="allowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.allowedCallerIpAddressRange"></a>

```typescript
public readonly allowedCallerIpAddressRange: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogicAppWorkflowAccessControlAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a>

---


### LogicAppWorkflowAccessControlContentOutputReference <a name="LogicAppWorkflowAccessControlContentOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

new logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.allowedCallerIpAddressRangeInput">allowedCallerIpAddressRangeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.allowedCallerIpAddressRange">allowedCallerIpAddressRange</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedCallerIpAddressRangeInput`<sup>Optional</sup> <a name="allowedCallerIpAddressRangeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.allowedCallerIpAddressRangeInput"></a>

```typescript
public readonly allowedCallerIpAddressRangeInput: string[];
```

- *Type:* string[]

---

##### `allowedCallerIpAddressRange`<sup>Required</sup> <a name="allowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.allowedCallerIpAddressRange"></a>

```typescript
public readonly allowedCallerIpAddressRange: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogicAppWorkflowAccessControlContent;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a>

---


### LogicAppWorkflowAccessControlOutputReference <a name="LogicAppWorkflowAccessControlOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

new logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putWorkflowManagement">putWorkflowManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetTrigger">resetTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetWorkflowManagement">resetWorkflowManagement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putAction"></a>

```typescript
public putAction(value: LogicAppWorkflowAccessControlAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a>

---

##### `putContent` <a name="putContent" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putContent"></a>

```typescript
public putContent(value: LogicAppWorkflowAccessControlContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a>

---

##### `putTrigger` <a name="putTrigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putTrigger"></a>

```typescript
public putTrigger(value: LogicAppWorkflowAccessControlTrigger): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a>

---

##### `putWorkflowManagement` <a name="putWorkflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putWorkflowManagement"></a>

```typescript
public putWorkflowManagement(value: LogicAppWorkflowAccessControlWorkflowManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putWorkflowManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetTrigger"></a>

```typescript
public resetTrigger(): void
```

##### `resetWorkflowManagement` <a name="resetWorkflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetWorkflowManagement"></a>

```typescript
public resetWorkflowManagement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference">LogicAppWorkflowAccessControlActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.content">content</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference">LogicAppWorkflowAccessControlContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference">LogicAppWorkflowAccessControlTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.workflowManagement">workflowManagement</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference">LogicAppWorkflowAccessControlWorkflowManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.contentInput">contentInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.triggerInput">triggerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.workflowManagementInput">workflowManagementInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.action"></a>

```typescript
public readonly action: LogicAppWorkflowAccessControlActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference">LogicAppWorkflowAccessControlActionOutputReference</a>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.content"></a>

```typescript
public readonly content: LogicAppWorkflowAccessControlContentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference">LogicAppWorkflowAccessControlContentOutputReference</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.trigger"></a>

```typescript
public readonly trigger: LogicAppWorkflowAccessControlTriggerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference">LogicAppWorkflowAccessControlTriggerOutputReference</a>

---

##### `workflowManagement`<sup>Required</sup> <a name="workflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.workflowManagement"></a>

```typescript
public readonly workflowManagement: LogicAppWorkflowAccessControlWorkflowManagementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference">LogicAppWorkflowAccessControlWorkflowManagementOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: LogicAppWorkflowAccessControlAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: LogicAppWorkflowAccessControlContent;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a>

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.triggerInput"></a>

```typescript
public readonly triggerInput: LogicAppWorkflowAccessControlTrigger;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a>

---

##### `workflowManagementInput`<sup>Optional</sup> <a name="workflowManagementInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.workflowManagementInput"></a>

```typescript
public readonly workflowManagementInput: LogicAppWorkflowAccessControlWorkflowManagement;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogicAppWorkflowAccessControl;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a>

---


### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

new logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.get"></a>

```typescript
public get(index: number): LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim</a>[]

---


### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

new logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim</a>

---


### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

new logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.get"></a>

```typescript
public get(index: number): LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy</a>[]

---


### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

new logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.putClaim">putClaim</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClaim` <a name="putClaim" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.putClaim"></a>

```typescript
public putClaim(value: IResolvable | LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.putClaim.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.claim">claim</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.claimInput">claimInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `claim`<sup>Required</sup> <a name="claim" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.claim"></a>

```typescript
public readonly claim: LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList</a>

---

##### `claimInput`<sup>Optional</sup> <a name="claimInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.claimInput"></a>

```typescript
public readonly claimInput: IResolvable | LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy</a>

---


### LogicAppWorkflowAccessControlTriggerOutputReference <a name="LogicAppWorkflowAccessControlTriggerOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

new logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.putOpenAuthenticationPolicy">putOpenAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resetOpenAuthenticationPolicy">resetOpenAuthenticationPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOpenAuthenticationPolicy` <a name="putOpenAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.putOpenAuthenticationPolicy"></a>

```typescript
public putOpenAuthenticationPolicy(value: IResolvable | LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.putOpenAuthenticationPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy</a>[]

---

##### `resetOpenAuthenticationPolicy` <a name="resetOpenAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resetOpenAuthenticationPolicy"></a>

```typescript
public resetOpenAuthenticationPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.openAuthenticationPolicy">openAuthenticationPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.allowedCallerIpAddressRangeInput">allowedCallerIpAddressRangeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.openAuthenticationPolicyInput">openAuthenticationPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.allowedCallerIpAddressRange">allowedCallerIpAddressRange</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `openAuthenticationPolicy`<sup>Required</sup> <a name="openAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.openAuthenticationPolicy"></a>

```typescript
public readonly openAuthenticationPolicy: LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList</a>

---

##### `allowedCallerIpAddressRangeInput`<sup>Optional</sup> <a name="allowedCallerIpAddressRangeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.allowedCallerIpAddressRangeInput"></a>

```typescript
public readonly allowedCallerIpAddressRangeInput: string[];
```

- *Type:* string[]

---

##### `openAuthenticationPolicyInput`<sup>Optional</sup> <a name="openAuthenticationPolicyInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.openAuthenticationPolicyInput"></a>

```typescript
public readonly openAuthenticationPolicyInput: IResolvable | LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy</a>[]

---

##### `allowedCallerIpAddressRange`<sup>Required</sup> <a name="allowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.allowedCallerIpAddressRange"></a>

```typescript
public readonly allowedCallerIpAddressRange: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogicAppWorkflowAccessControlTrigger;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a>

---


### LogicAppWorkflowAccessControlWorkflowManagementOutputReference <a name="LogicAppWorkflowAccessControlWorkflowManagementOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

new logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.allowedCallerIpAddressRangeInput">allowedCallerIpAddressRangeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.allowedCallerIpAddressRange">allowedCallerIpAddressRange</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedCallerIpAddressRangeInput`<sup>Optional</sup> <a name="allowedCallerIpAddressRangeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.allowedCallerIpAddressRangeInput"></a>

```typescript
public readonly allowedCallerIpAddressRangeInput: string[];
```

- *Type:* string[]

---

##### `allowedCallerIpAddressRange`<sup>Required</sup> <a name="allowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.allowedCallerIpAddressRange"></a>

```typescript
public readonly allowedCallerIpAddressRange: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogicAppWorkflowAccessControlWorkflowManagement;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a>

---


### LogicAppWorkflowIdentityOutputReference <a name="LogicAppWorkflowIdentityOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

new logicAppWorkflow.LogicAppWorkflowIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogicAppWorkflowIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a>

---


### LogicAppWorkflowTimeoutsOutputReference <a name="LogicAppWorkflowTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer"></a>

```typescript
import { logicAppWorkflow } from '@cdktf/provider-azurerm'

new logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts">LogicAppWorkflowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogicAppWorkflowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts">LogicAppWorkflowTimeouts</a>

---



