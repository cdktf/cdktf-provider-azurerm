# `chaosStudioExperiment` Submodule <a name="`chaosStudioExperiment` Submodule" id="@cdktf/provider-azurerm.chaosStudioExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChaosStudioExperiment <a name="ChaosStudioExperiment" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment azurerm_chaos_studio_experiment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

new chaosStudioExperiment.ChaosStudioExperiment(scope: Construct, id: string, config: ChaosStudioExperimentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig">ChaosStudioExperimentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig">ChaosStudioExperimentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSelectors">putSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putIdentity"></a>

```typescript
public putIdentity(value: ChaosStudioExperimentIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a>

---

##### `putSelectors` <a name="putSelectors" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSelectors"></a>

```typescript
public putSelectors(value: IResolvable | ChaosStudioExperimentSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSelectors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>[]

---

##### `putSteps` <a name="putSteps" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSteps"></a>

```typescript
public putSteps(value: IResolvable | ChaosStudioExperimentSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSteps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putTimeouts"></a>

```typescript
public putTimeouts(value: ChaosStudioExperimentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ChaosStudioExperiment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isConstruct"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

chaosStudioExperiment.ChaosStudioExperiment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformElement"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

chaosStudioExperiment.ChaosStudioExperiment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformResource"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

chaosStudioExperiment.ChaosStudioExperiment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ChaosStudioExperiment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChaosStudioExperiment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChaosStudioExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChaosStudioExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference">ChaosStudioExperimentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList">ChaosStudioExperimentSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList">ChaosStudioExperimentStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference">ChaosStudioExperimentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.selectorsInput">selectorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.stepsInput">stepsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.identity"></a>

```typescript
public readonly identity: ChaosStudioExperimentIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference">ChaosStudioExperimentIdentityOutputReference</a>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.selectors"></a>

```typescript
public readonly selectors: ChaosStudioExperimentSelectorsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList">ChaosStudioExperimentSelectorsList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.steps"></a>

```typescript
public readonly steps: ChaosStudioExperimentStepsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList">ChaosStudioExperimentStepsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.timeouts"></a>

```typescript
public readonly timeouts: ChaosStudioExperimentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference">ChaosStudioExperimentTimeoutsOutputReference</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.identityInput"></a>

```typescript
public readonly identityInput: ChaosStudioExperimentIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.selectorsInput"></a>

```typescript
public readonly selectorsInput: IResolvable | ChaosStudioExperimentSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>[]

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | ChaosStudioExperimentSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChaosStudioExperimentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChaosStudioExperimentConfig <a name="ChaosStudioExperimentConfig" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

const chaosStudioExperimentConfig: chaosStudioExperiment.ChaosStudioExperimentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#location ChaosStudioExperiment#location}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#resource_group_name ChaosStudioExperiment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.selectors">selectors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>[]</code> | selectors block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.steps">steps</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>[]</code> | steps block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#id ChaosStudioExperiment#id}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#location ChaosStudioExperiment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#resource_group_name ChaosStudioExperiment#resource_group_name}.

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.selectors"></a>

```typescript
public readonly selectors: IResolvable | ChaosStudioExperimentSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>[]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#selectors ChaosStudioExperiment#selectors}

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.steps"></a>

```typescript
public readonly steps: IResolvable | ChaosStudioExperimentSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>[]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#steps ChaosStudioExperiment#steps}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#id ChaosStudioExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.identity"></a>

```typescript
public readonly identity: ChaosStudioExperimentIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#identity ChaosStudioExperiment#identity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChaosStudioExperimentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#timeouts ChaosStudioExperiment#timeouts}

---

### ChaosStudioExperimentIdentity <a name="ChaosStudioExperimentIdentity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

const chaosStudioExperimentIdentity: chaosStudioExperiment.ChaosStudioExperimentIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#type ChaosStudioExperiment#type}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#identity_ids ChaosStudioExperiment#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#type ChaosStudioExperiment#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#identity_ids ChaosStudioExperiment#identity_ids}.

---

### ChaosStudioExperimentSelectors <a name="ChaosStudioExperimentSelectors" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

const chaosStudioExperimentSelectors: chaosStudioExperiment.ChaosStudioExperimentSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.property.chaosStudioTargetIds">chaosStudioTargetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#chaos_studio_target_ids ChaosStudioExperiment#chaos_studio_target_ids}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}. |

---

##### `chaosStudioTargetIds`<sup>Required</sup> <a name="chaosStudioTargetIds" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.property.chaosStudioTargetIds"></a>

```typescript
public readonly chaosStudioTargetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#chaos_studio_target_ids ChaosStudioExperiment#chaos_studio_target_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}.

---

### ChaosStudioExperimentSteps <a name="ChaosStudioExperimentSteps" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

const chaosStudioExperimentSteps: chaosStudioExperiment.ChaosStudioExperimentSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.property.branch">branch</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>[]</code> | branch block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}. |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.property.branch"></a>

```typescript
public readonly branch: IResolvable | ChaosStudioExperimentStepsBranch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>[]

branch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#branch ChaosStudioExperiment#branch}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}.

---

### ChaosStudioExperimentStepsBranch <a name="ChaosStudioExperimentStepsBranch" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

const chaosStudioExperimentStepsBranch: chaosStudioExperiment.ChaosStudioExperimentStepsBranch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.property.actions">actions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>[]</code> | actions block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.property.actions"></a>

```typescript
public readonly actions: IResolvable | ChaosStudioExperimentStepsBranchActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#actions ChaosStudioExperiment#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}.

---

### ChaosStudioExperimentStepsBranchActions <a name="ChaosStudioExperimentStepsBranchActions" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

const chaosStudioExperimentStepsBranchActions: chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#action_type ChaosStudioExperiment#action_type}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#duration ChaosStudioExperiment#duration}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#parameters ChaosStudioExperiment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.selectorName">selectorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#selector_name ChaosStudioExperiment#selector_name}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.urn">urn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#urn ChaosStudioExperiment#urn}. |

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#action_type ChaosStudioExperiment#action_type}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#duration ChaosStudioExperiment#duration}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#parameters ChaosStudioExperiment#parameters}.

---

##### `selectorName`<sup>Optional</sup> <a name="selectorName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.selectorName"></a>

```typescript
public readonly selectorName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#selector_name ChaosStudioExperiment#selector_name}.

---

##### `urn`<sup>Optional</sup> <a name="urn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.urn"></a>

```typescript
public readonly urn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#urn ChaosStudioExperiment#urn}.

---

### ChaosStudioExperimentTimeouts <a name="ChaosStudioExperimentTimeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

const chaosStudioExperimentTimeouts: chaosStudioExperiment.ChaosStudioExperimentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#create ChaosStudioExperiment#create}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#delete ChaosStudioExperiment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#read ChaosStudioExperiment#read}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#update ChaosStudioExperiment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#create ChaosStudioExperiment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#delete ChaosStudioExperiment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#read ChaosStudioExperiment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/chaos_studio_experiment#update ChaosStudioExperiment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChaosStudioExperimentIdentityOutputReference <a name="ChaosStudioExperimentIdentityOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

new chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChaosStudioExperimentIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a>

---


### ChaosStudioExperimentSelectorsList <a name="ChaosStudioExperimentSelectorsList" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

new chaosStudioExperiment.ChaosStudioExperimentSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.get"></a>

```typescript
public get(index: number): ChaosStudioExperimentSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChaosStudioExperimentSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>[]

---


### ChaosStudioExperimentSelectorsOutputReference <a name="ChaosStudioExperimentSelectorsOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

new chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.chaosStudioTargetIdsInput">chaosStudioTargetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.chaosStudioTargetIds">chaosStudioTargetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chaosStudioTargetIdsInput`<sup>Optional</sup> <a name="chaosStudioTargetIdsInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.chaosStudioTargetIdsInput"></a>

```typescript
public readonly chaosStudioTargetIdsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `chaosStudioTargetIds`<sup>Required</sup> <a name="chaosStudioTargetIds" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.chaosStudioTargetIds"></a>

```typescript
public readonly chaosStudioTargetIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChaosStudioExperimentSelectors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>

---


### ChaosStudioExperimentStepsBranchActionsList <a name="ChaosStudioExperimentStepsBranchActionsList" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

new chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.get"></a>

```typescript
public get(index: number): ChaosStudioExperimentStepsBranchActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChaosStudioExperimentStepsBranchActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>[]

---


### ChaosStudioExperimentStepsBranchActionsOutputReference <a name="ChaosStudioExperimentStepsBranchActionsOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

new chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetSelectorName">resetSelectorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetUrn">resetUrn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSelectorName` <a name="resetSelectorName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetSelectorName"></a>

```typescript
public resetSelectorName(): void
```

##### `resetUrn` <a name="resetUrn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetUrn"></a>

```typescript
public resetUrn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.selectorNameInput">selectorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.urnInput">urnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.selectorName">selectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.urn">urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `selectorNameInput`<sup>Optional</sup> <a name="selectorNameInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.selectorNameInput"></a>

```typescript
public readonly selectorNameInput: string;
```

- *Type:* string

---

##### `urnInput`<sup>Optional</sup> <a name="urnInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.urnInput"></a>

```typescript
public readonly urnInput: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `selectorName`<sup>Required</sup> <a name="selectorName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.selectorName"></a>

```typescript
public readonly selectorName: string;
```

- *Type:* string

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.urn"></a>

```typescript
public readonly urn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChaosStudioExperimentStepsBranchActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>

---


### ChaosStudioExperimentStepsBranchList <a name="ChaosStudioExperimentStepsBranchList" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

new chaosStudioExperiment.ChaosStudioExperimentStepsBranchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.get"></a>

```typescript
public get(index: number): ChaosStudioExperimentStepsBranchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChaosStudioExperimentStepsBranch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>[]

---


### ChaosStudioExperimentStepsBranchOutputReference <a name="ChaosStudioExperimentStepsBranchOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

new chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.putActions">putActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.putActions"></a>

```typescript
public putActions(value: IResolvable | ChaosStudioExperimentStepsBranchActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.putActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList">ChaosStudioExperimentStepsBranchActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.actionsInput">actionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.actions"></a>

```typescript
public readonly actions: ChaosStudioExperimentStepsBranchActionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList">ChaosStudioExperimentStepsBranchActionsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | ChaosStudioExperimentStepsBranchActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChaosStudioExperimentStepsBranch;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>

---


### ChaosStudioExperimentStepsList <a name="ChaosStudioExperimentStepsList" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

new chaosStudioExperiment.ChaosStudioExperimentStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.get"></a>

```typescript
public get(index: number): ChaosStudioExperimentStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChaosStudioExperimentSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>[]

---


### ChaosStudioExperimentStepsOutputReference <a name="ChaosStudioExperimentStepsOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

new chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.putBranch">putBranch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBranch` <a name="putBranch" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.putBranch"></a>

```typescript
public putBranch(value: IResolvable | ChaosStudioExperimentStepsBranch[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.putBranch.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.branch">branch</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList">ChaosStudioExperimentStepsBranchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.branchInput">branchInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.branch"></a>

```typescript
public readonly branch: ChaosStudioExperimentStepsBranchList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList">ChaosStudioExperimentStepsBranchList</a>

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: IResolvable | ChaosStudioExperimentStepsBranch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChaosStudioExperimentSteps;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>

---


### ChaosStudioExperimentTimeoutsOutputReference <a name="ChaosStudioExperimentTimeoutsOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer"></a>

```typescript
import { chaosStudioExperiment } from '@cdktf/provider-azurerm'

new chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChaosStudioExperimentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>

---



