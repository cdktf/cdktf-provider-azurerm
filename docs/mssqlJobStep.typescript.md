# `mssqlJobStep` Submodule <a name="`mssqlJobStep` Submodule" id="@cdktf/provider-azurerm.mssqlJobStep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlJobStep <a name="MssqlJobStep" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step azurerm_mssql_job_step}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer"></a>

```typescript
import { mssqlJobStep } from '@cdktf/provider-azurerm'

new mssqlJobStep.MssqlJobStep(scope: Construct, id: string, config: MssqlJobStepConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig">MssqlJobStepConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig">MssqlJobStepConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget">putOutputTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetInitialRetryIntervalSeconds">resetInitialRetryIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetMaximumRetryIntervalSeconds">resetMaximumRetryIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOutputTarget">resetOutputTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryAttempts">resetRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryIntervalBackoffMultiplier">resetRetryIntervalBackoffMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOutputTarget` <a name="putOutputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget"></a>

```typescript
public putOutputTarget(value: MssqlJobStepOutputTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlJobStepTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialRetryIntervalSeconds` <a name="resetInitialRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetInitialRetryIntervalSeconds"></a>

```typescript
public resetInitialRetryIntervalSeconds(): void
```

##### `resetMaximumRetryIntervalSeconds` <a name="resetMaximumRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetMaximumRetryIntervalSeconds"></a>

```typescript
public resetMaximumRetryIntervalSeconds(): void
```

##### `resetOutputTarget` <a name="resetOutputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOutputTarget"></a>

```typescript
public resetOutputTarget(): void
```

##### `resetRetryAttempts` <a name="resetRetryAttempts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryAttempts"></a>

```typescript
public resetRetryAttempts(): void
```

##### `resetRetryIntervalBackoffMultiplier` <a name="resetRetryIntervalBackoffMultiplier" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryIntervalBackoffMultiplier"></a>

```typescript
public resetRetryIntervalBackoffMultiplier(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlJobStep resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isConstruct"></a>

```typescript
import { mssqlJobStep } from '@cdktf/provider-azurerm'

mssqlJobStep.MssqlJobStep.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformElement"></a>

```typescript
import { mssqlJobStep } from '@cdktf/provider-azurerm'

mssqlJobStep.MssqlJobStep.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformResource"></a>

```typescript
import { mssqlJobStep } from '@cdktf/provider-azurerm'

mssqlJobStep.MssqlJobStep.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport"></a>

```typescript
import { mssqlJobStep } from '@cdktf/provider-azurerm'

mssqlJobStep.MssqlJobStep.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MssqlJobStep resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlJobStep to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlJobStep that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlJobStep to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTarget">outputTarget</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference">MssqlJobStepOutputTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference">MssqlJobStepTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSecondsInput">initialRetryIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialIdInput">jobCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobIdInput">jobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndexInput">jobStepIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupIdInput">jobTargetGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSecondsInput">maximumRetryIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTargetInput">outputTargetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttemptsInput">retryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplierInput">retryIntervalBackoffMultiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScriptInput">sqlScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSeconds">initialRetryIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialId">jobCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndex">jobStepIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupId">jobTargetGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSeconds">maximumRetryIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplier">retryIntervalBackoffMultiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScript">sqlScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `outputTarget`<sup>Required</sup> <a name="outputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTarget"></a>

```typescript
public readonly outputTarget: MssqlJobStepOutputTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference">MssqlJobStepOutputTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlJobStepTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference">MssqlJobStepTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialRetryIntervalSecondsInput`<sup>Optional</sup> <a name="initialRetryIntervalSecondsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSecondsInput"></a>

```typescript
public readonly initialRetryIntervalSecondsInput: number;
```

- *Type:* number

---

##### `jobCredentialIdInput`<sup>Optional</sup> <a name="jobCredentialIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialIdInput"></a>

```typescript
public readonly jobCredentialIdInput: string;
```

- *Type:* string

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: string;
```

- *Type:* string

---

##### `jobStepIndexInput`<sup>Optional</sup> <a name="jobStepIndexInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndexInput"></a>

```typescript
public readonly jobStepIndexInput: number;
```

- *Type:* number

---

##### `jobTargetGroupIdInput`<sup>Optional</sup> <a name="jobTargetGroupIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupIdInput"></a>

```typescript
public readonly jobTargetGroupIdInput: string;
```

- *Type:* string

---

##### `maximumRetryIntervalSecondsInput`<sup>Optional</sup> <a name="maximumRetryIntervalSecondsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSecondsInput"></a>

```typescript
public readonly maximumRetryIntervalSecondsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputTargetInput`<sup>Optional</sup> <a name="outputTargetInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTargetInput"></a>

```typescript
public readonly outputTargetInput: MssqlJobStepOutputTarget;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

---

##### `retryAttemptsInput`<sup>Optional</sup> <a name="retryAttemptsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttemptsInput"></a>

```typescript
public readonly retryAttemptsInput: number;
```

- *Type:* number

---

##### `retryIntervalBackoffMultiplierInput`<sup>Optional</sup> <a name="retryIntervalBackoffMultiplierInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplierInput"></a>

```typescript
public readonly retryIntervalBackoffMultiplierInput: number;
```

- *Type:* number

---

##### `sqlScriptInput`<sup>Optional</sup> <a name="sqlScriptInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScriptInput"></a>

```typescript
public readonly sqlScriptInput: string;
```

- *Type:* string

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlJobStepTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialRetryIntervalSeconds`<sup>Required</sup> <a name="initialRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSeconds"></a>

```typescript
public readonly initialRetryIntervalSeconds: number;
```

- *Type:* number

---

##### `jobCredentialId`<sup>Required</sup> <a name="jobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialId"></a>

```typescript
public readonly jobCredentialId: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `jobStepIndex`<sup>Required</sup> <a name="jobStepIndex" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndex"></a>

```typescript
public readonly jobStepIndex: number;
```

- *Type:* number

---

##### `jobTargetGroupId`<sup>Required</sup> <a name="jobTargetGroupId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupId"></a>

```typescript
public readonly jobTargetGroupId: string;
```

- *Type:* string

---

##### `maximumRetryIntervalSeconds`<sup>Required</sup> <a name="maximumRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSeconds"></a>

```typescript
public readonly maximumRetryIntervalSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retryAttempts`<sup>Required</sup> <a name="retryAttempts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number

---

##### `retryIntervalBackoffMultiplier`<sup>Required</sup> <a name="retryIntervalBackoffMultiplier" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplier"></a>

```typescript
public readonly retryIntervalBackoffMultiplier: number;
```

- *Type:* number

---

##### `sqlScript`<sup>Required</sup> <a name="sqlScript" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScript"></a>

```typescript
public readonly sqlScript: string;
```

- *Type:* string

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlJobStepConfig <a name="MssqlJobStepConfig" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.Initializer"></a>

```typescript
import { mssqlJobStep } from '@cdktf/provider-azurerm'

const mssqlJobStepConfig: mssqlJobStep.MssqlJobStepConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobCredentialId">jobCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobId">jobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#job_id MssqlJobStep#job_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobStepIndex">jobStepIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#job_step_index MssqlJobStep#job_step_index}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobTargetGroupId">jobTargetGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#job_target_group_id MssqlJobStep#job_target_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#name MssqlJobStep#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.sqlScript">sqlScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#sql_script MssqlJobStep#sql_script}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#id MssqlJobStep#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.initialRetryIntervalSeconds">initialRetryIntervalSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#initial_retry_interval_seconds MssqlJobStep#initial_retry_interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.maximumRetryIntervalSeconds">maximumRetryIntervalSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#maximum_retry_interval_seconds MssqlJobStep#maximum_retry_interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.outputTarget">outputTarget</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a></code> | output_target block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#retry_attempts MssqlJobStep#retry_attempts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryIntervalBackoffMultiplier">retryIntervalBackoffMultiplier</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#retry_interval_backoff_multiplier MssqlJobStep#retry_interval_backoff_multiplier}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#timeout_seconds MssqlJobStep#timeout_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `jobCredentialId`<sup>Required</sup> <a name="jobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobCredentialId"></a>

```typescript
public readonly jobCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#job_id MssqlJobStep#job_id}.

---

##### `jobStepIndex`<sup>Required</sup> <a name="jobStepIndex" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobStepIndex"></a>

```typescript
public readonly jobStepIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#job_step_index MssqlJobStep#job_step_index}.

---

##### `jobTargetGroupId`<sup>Required</sup> <a name="jobTargetGroupId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobTargetGroupId"></a>

```typescript
public readonly jobTargetGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#job_target_group_id MssqlJobStep#job_target_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#name MssqlJobStep#name}.

---

##### `sqlScript`<sup>Required</sup> <a name="sqlScript" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.sqlScript"></a>

```typescript
public readonly sqlScript: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#sql_script MssqlJobStep#sql_script}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#id MssqlJobStep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialRetryIntervalSeconds`<sup>Optional</sup> <a name="initialRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.initialRetryIntervalSeconds"></a>

```typescript
public readonly initialRetryIntervalSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#initial_retry_interval_seconds MssqlJobStep#initial_retry_interval_seconds}.

---

##### `maximumRetryIntervalSeconds`<sup>Optional</sup> <a name="maximumRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.maximumRetryIntervalSeconds"></a>

```typescript
public readonly maximumRetryIntervalSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#maximum_retry_interval_seconds MssqlJobStep#maximum_retry_interval_seconds}.

---

##### `outputTarget`<sup>Optional</sup> <a name="outputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.outputTarget"></a>

```typescript
public readonly outputTarget: MssqlJobStepOutputTarget;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

output_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#output_target MssqlJobStep#output_target}

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#retry_attempts MssqlJobStep#retry_attempts}.

---

##### `retryIntervalBackoffMultiplier`<sup>Optional</sup> <a name="retryIntervalBackoffMultiplier" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryIntervalBackoffMultiplier"></a>

```typescript
public readonly retryIntervalBackoffMultiplier: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#retry_interval_backoff_multiplier MssqlJobStep#retry_interval_backoff_multiplier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlJobStepTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#timeouts MssqlJobStep#timeouts}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#timeout_seconds MssqlJobStep#timeout_seconds}.

---

### MssqlJobStepOutputTarget <a name="MssqlJobStepOutputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.Initializer"></a>

```typescript
import { mssqlJobStep } from '@cdktf/provider-azurerm'

const mssqlJobStepOutputTarget: mssqlJobStep.MssqlJobStepOutputTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.jobCredentialId">jobCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.mssqlDatabaseId">mssqlDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#mssql_database_id MssqlJobStep#mssql_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#table_name MssqlJobStep#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#schema_name MssqlJobStep#schema_name}. |

---

##### `jobCredentialId`<sup>Required</sup> <a name="jobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.jobCredentialId"></a>

```typescript
public readonly jobCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}.

---

##### `mssqlDatabaseId`<sup>Required</sup> <a name="mssqlDatabaseId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.mssqlDatabaseId"></a>

```typescript
public readonly mssqlDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#mssql_database_id MssqlJobStep#mssql_database_id}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#table_name MssqlJobStep#table_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#schema_name MssqlJobStep#schema_name}.

---

### MssqlJobStepTimeouts <a name="MssqlJobStepTimeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.Initializer"></a>

```typescript
import { mssqlJobStep } from '@cdktf/provider-azurerm'

const mssqlJobStepTimeouts: mssqlJobStep.MssqlJobStepTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#create MssqlJobStep#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#delete MssqlJobStep#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#read MssqlJobStep#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#update MssqlJobStep#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#create MssqlJobStep#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#delete MssqlJobStep#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#read MssqlJobStep#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_job_step#update MssqlJobStep#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlJobStepOutputTargetOutputReference <a name="MssqlJobStepOutputTargetOutputReference" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer"></a>

```typescript
import { mssqlJobStep } from '@cdktf/provider-azurerm'

new mssqlJobStep.MssqlJobStepOutputTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialIdInput">jobCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseIdInput">mssqlDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialId">jobCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseId">mssqlDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobCredentialIdInput`<sup>Optional</sup> <a name="jobCredentialIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialIdInput"></a>

```typescript
public readonly jobCredentialIdInput: string;
```

- *Type:* string

---

##### `mssqlDatabaseIdInput`<sup>Optional</sup> <a name="mssqlDatabaseIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseIdInput"></a>

```typescript
public readonly mssqlDatabaseIdInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `jobCredentialId`<sup>Required</sup> <a name="jobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialId"></a>

```typescript
public readonly jobCredentialId: string;
```

- *Type:* string

---

##### `mssqlDatabaseId`<sup>Required</sup> <a name="mssqlDatabaseId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseId"></a>

```typescript
public readonly mssqlDatabaseId: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlJobStepOutputTarget;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

---


### MssqlJobStepTimeoutsOutputReference <a name="MssqlJobStepTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlJobStep } from '@cdktf/provider-azurerm'

new mssqlJobStep.MssqlJobStepTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlJobStepTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>

---



