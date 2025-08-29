# `automationHybridRunbookWorker` Submodule <a name="`automationHybridRunbookWorker` Submodule" id="@cdktf/provider-azurerm.automationHybridRunbookWorker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationHybridRunbookWorker <a name="AutomationHybridRunbookWorker" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker azurerm_automation_hybrid_runbook_worker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer"></a>

```typescript
import { automationHybridRunbookWorker } from '@cdktf/provider-azurerm'

new automationHybridRunbookWorker.AutomationHybridRunbookWorker(scope: Construct, id: string, config: AutomationHybridRunbookWorkerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig">AutomationHybridRunbookWorkerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig">AutomationHybridRunbookWorkerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.putTimeouts"></a>

```typescript
public putTimeouts(value: AutomationHybridRunbookWorkerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationHybridRunbookWorker resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isConstruct"></a>

```typescript
import { automationHybridRunbookWorker } from '@cdktf/provider-azurerm'

automationHybridRunbookWorker.AutomationHybridRunbookWorker.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformElement"></a>

```typescript
import { automationHybridRunbookWorker } from '@cdktf/provider-azurerm'

automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformResource"></a>

```typescript
import { automationHybridRunbookWorker } from '@cdktf/provider-azurerm'

automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport"></a>

```typescript
import { automationHybridRunbookWorker } from '@cdktf/provider-azurerm'

automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AutomationHybridRunbookWorker resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutomationHybridRunbookWorker to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutomationHybridRunbookWorker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutomationHybridRunbookWorker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lastSeenDateTime">lastSeenDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.registrationDateTime">registrationDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference">AutomationHybridRunbookWorkerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerName">workerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerType">workerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountNameInput">automationAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceIdInput">vmResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupNameInput">workerGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerIdInput">workerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountName">automationAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceId">vmResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupName">workerGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerId">workerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `lastSeenDateTime`<sup>Required</sup> <a name="lastSeenDateTime" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lastSeenDateTime"></a>

```typescript
public readonly lastSeenDateTime: string;
```

- *Type:* string

---

##### `registrationDateTime`<sup>Required</sup> <a name="registrationDateTime" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.registrationDateTime"></a>

```typescript
public readonly registrationDateTime: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeouts"></a>

```typescript
public readonly timeouts: AutomationHybridRunbookWorkerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference">AutomationHybridRunbookWorkerTimeoutsOutputReference</a>

---

##### `workerName`<sup>Required</sup> <a name="workerName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerName"></a>

```typescript
public readonly workerName: string;
```

- *Type:* string

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerType"></a>

```typescript
public readonly workerType: string;
```

- *Type:* string

---

##### `automationAccountNameInput`<sup>Optional</sup> <a name="automationAccountNameInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountNameInput"></a>

```typescript
public readonly automationAccountNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AutomationHybridRunbookWorkerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a>

---

##### `vmResourceIdInput`<sup>Optional</sup> <a name="vmResourceIdInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceIdInput"></a>

```typescript
public readonly vmResourceIdInput: string;
```

- *Type:* string

---

##### `workerGroupNameInput`<sup>Optional</sup> <a name="workerGroupNameInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupNameInput"></a>

```typescript
public readonly workerGroupNameInput: string;
```

- *Type:* string

---

##### `workerIdInput`<sup>Optional</sup> <a name="workerIdInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerIdInput"></a>

```typescript
public readonly workerIdInput: string;
```

- *Type:* string

---

##### `automationAccountName`<sup>Required</sup> <a name="automationAccountName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountName"></a>

```typescript
public readonly automationAccountName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `vmResourceId`<sup>Required</sup> <a name="vmResourceId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceId"></a>

```typescript
public readonly vmResourceId: string;
```

- *Type:* string

---

##### `workerGroupName`<sup>Required</sup> <a name="workerGroupName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupName"></a>

```typescript
public readonly workerGroupName: string;
```

- *Type:* string

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerId"></a>

```typescript
public readonly workerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationHybridRunbookWorkerConfig <a name="AutomationHybridRunbookWorkerConfig" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.Initializer"></a>

```typescript
import { automationHybridRunbookWorker } from '@cdktf/provider-azurerm'

const automationHybridRunbookWorkerConfig: automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.automationAccountName">automationAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#automation_account_name AutomationHybridRunbookWorker#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#resource_group_name AutomationHybridRunbookWorker#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.vmResourceId">vmResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#vm_resource_id AutomationHybridRunbookWorker#vm_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerGroupName">workerGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#worker_group_name AutomationHybridRunbookWorker#worker_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerId">workerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#worker_id AutomationHybridRunbookWorker#worker_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#id AutomationHybridRunbookWorker#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `automationAccountName`<sup>Required</sup> <a name="automationAccountName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.automationAccountName"></a>

```typescript
public readonly automationAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#automation_account_name AutomationHybridRunbookWorker#automation_account_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#resource_group_name AutomationHybridRunbookWorker#resource_group_name}.

---

##### `vmResourceId`<sup>Required</sup> <a name="vmResourceId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.vmResourceId"></a>

```typescript
public readonly vmResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#vm_resource_id AutomationHybridRunbookWorker#vm_resource_id}.

---

##### `workerGroupName`<sup>Required</sup> <a name="workerGroupName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerGroupName"></a>

```typescript
public readonly workerGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#worker_group_name AutomationHybridRunbookWorker#worker_group_name}.

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerId"></a>

```typescript
public readonly workerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#worker_id AutomationHybridRunbookWorker#worker_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#id AutomationHybridRunbookWorker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AutomationHybridRunbookWorkerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#timeouts AutomationHybridRunbookWorker#timeouts}

---

### AutomationHybridRunbookWorkerTimeouts <a name="AutomationHybridRunbookWorkerTimeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.Initializer"></a>

```typescript
import { automationHybridRunbookWorker } from '@cdktf/provider-azurerm'

const automationHybridRunbookWorkerTimeouts: automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#create AutomationHybridRunbookWorker#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#delete AutomationHybridRunbookWorker#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#read AutomationHybridRunbookWorker#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#create AutomationHybridRunbookWorker#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#delete AutomationHybridRunbookWorker#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/automation_hybrid_runbook_worker#read AutomationHybridRunbookWorker#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationHybridRunbookWorkerTimeoutsOutputReference <a name="AutomationHybridRunbookWorkerTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer"></a>

```typescript
import { automationHybridRunbookWorker } from '@cdktf/provider-azurerm'

new automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationHybridRunbookWorkerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a>

---



