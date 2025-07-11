# `machineLearningSynapseSpark` Submodule <a name="`machineLearningSynapseSpark` Submodule" id="@cdktf/provider-azurerm.machineLearningSynapseSpark"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningSynapseSpark <a name="MachineLearningSynapseSpark" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark azurerm_machine_learning_synapse_spark}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer"></a>

```typescript
import { machineLearningSynapseSpark } from '@cdktf/provider-azurerm'

new machineLearningSynapseSpark.MachineLearningSynapseSpark(scope: Construct, id: string, config: MachineLearningSynapseSparkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig">MachineLearningSynapseSparkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig">MachineLearningSynapseSparkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetLocalAuthEnabled">resetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putIdentity"></a>

```typescript
public putIdentity(value: MachineLearningSynapseSparkIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putTimeouts"></a>

```typescript
public putTimeouts(value: MachineLearningSynapseSparkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetLocalAuthEnabled` <a name="resetLocalAuthEnabled" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetLocalAuthEnabled"></a>

```typescript
public resetLocalAuthEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MachineLearningSynapseSpark resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isConstruct"></a>

```typescript
import { machineLearningSynapseSpark } from '@cdktf/provider-azurerm'

machineLearningSynapseSpark.MachineLearningSynapseSpark.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformElement"></a>

```typescript
import { machineLearningSynapseSpark } from '@cdktf/provider-azurerm'

machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformResource"></a>

```typescript
import { machineLearningSynapseSpark } from '@cdktf/provider-azurerm'

machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.generateConfigForImport"></a>

```typescript
import { machineLearningSynapseSpark } from '@cdktf/provider-azurerm'

machineLearningSynapseSpark.MachineLearningSynapseSpark.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MachineLearningSynapseSpark resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MachineLearningSynapseSpark to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MachineLearningSynapseSpark that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningSynapseSpark to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference">MachineLearningSynapseSparkIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference">MachineLearningSynapseSparkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabledInput">localAuthEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceIdInput">machineLearningWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolIdInput">synapseSparkPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabled">localAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceId">machineLearningWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolId">synapseSparkPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identity"></a>

```typescript
public readonly identity: MachineLearningSynapseSparkIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference">MachineLearningSynapseSparkIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeouts"></a>

```typescript
public readonly timeouts: MachineLearningSynapseSparkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference">MachineLearningSynapseSparkTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identityInput"></a>

```typescript
public readonly identityInput: MachineLearningSynapseSparkIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localAuthEnabledInput`<sup>Optional</sup> <a name="localAuthEnabledInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabledInput"></a>

```typescript
public readonly localAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `machineLearningWorkspaceIdInput`<sup>Optional</sup> <a name="machineLearningWorkspaceIdInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceIdInput"></a>

```typescript
public readonly machineLearningWorkspaceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `synapseSparkPoolIdInput`<sup>Optional</sup> <a name="synapseSparkPoolIdInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolIdInput"></a>

```typescript
public readonly synapseSparkPoolIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MachineLearningSynapseSparkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localAuthEnabled`<sup>Required</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabled"></a>

```typescript
public readonly localAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `machineLearningWorkspaceId`<sup>Required</sup> <a name="machineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceId"></a>

```typescript
public readonly machineLearningWorkspaceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `synapseSparkPoolId`<sup>Required</sup> <a name="synapseSparkPoolId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolId"></a>

```typescript
public readonly synapseSparkPoolId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningSynapseSparkConfig <a name="MachineLearningSynapseSparkConfig" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.Initializer"></a>

```typescript
import { machineLearningSynapseSpark } from '@cdktf/provider-azurerm'

const machineLearningSynapseSparkConfig: machineLearningSynapseSpark.MachineLearningSynapseSparkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#location MachineLearningSynapseSpark#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.machineLearningWorkspaceId">machineLearningWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#machine_learning_workspace_id MachineLearningSynapseSpark#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#name MachineLearningSynapseSpark#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.synapseSparkPoolId">synapseSparkPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#synapse_spark_pool_id MachineLearningSynapseSpark#synapse_spark_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#description MachineLearningSynapseSpark#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#id MachineLearningSynapseSpark#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.localAuthEnabled">localAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#local_auth_enabled MachineLearningSynapseSpark#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#tags MachineLearningSynapseSpark#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#location MachineLearningSynapseSpark#location}.

---

##### `machineLearningWorkspaceId`<sup>Required</sup> <a name="machineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.machineLearningWorkspaceId"></a>

```typescript
public readonly machineLearningWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#machine_learning_workspace_id MachineLearningSynapseSpark#machine_learning_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#name MachineLearningSynapseSpark#name}.

---

##### `synapseSparkPoolId`<sup>Required</sup> <a name="synapseSparkPoolId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.synapseSparkPoolId"></a>

```typescript
public readonly synapseSparkPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#synapse_spark_pool_id MachineLearningSynapseSpark#synapse_spark_pool_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#description MachineLearningSynapseSpark#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#id MachineLearningSynapseSpark#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.identity"></a>

```typescript
public readonly identity: MachineLearningSynapseSparkIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#identity MachineLearningSynapseSpark#identity}

---

##### `localAuthEnabled`<sup>Optional</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.localAuthEnabled"></a>

```typescript
public readonly localAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#local_auth_enabled MachineLearningSynapseSpark#local_auth_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#tags MachineLearningSynapseSpark#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MachineLearningSynapseSparkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#timeouts MachineLearningSynapseSpark#timeouts}

---

### MachineLearningSynapseSparkIdentity <a name="MachineLearningSynapseSparkIdentity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.Initializer"></a>

```typescript
import { machineLearningSynapseSpark } from '@cdktf/provider-azurerm'

const machineLearningSynapseSparkIdentity: machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#type MachineLearningSynapseSpark#type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#identity_ids MachineLearningSynapseSpark#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#type MachineLearningSynapseSpark#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#identity_ids MachineLearningSynapseSpark#identity_ids}.

---

### MachineLearningSynapseSparkTimeouts <a name="MachineLearningSynapseSparkTimeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.Initializer"></a>

```typescript
import { machineLearningSynapseSpark } from '@cdktf/provider-azurerm'

const machineLearningSynapseSparkTimeouts: machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#create MachineLearningSynapseSpark#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#delete MachineLearningSynapseSpark#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#read MachineLearningSynapseSpark#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#create MachineLearningSynapseSpark#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#delete MachineLearningSynapseSpark#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_synapse_spark#read MachineLearningSynapseSpark#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningSynapseSparkIdentityOutputReference <a name="MachineLearningSynapseSparkIdentityOutputReference" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer"></a>

```typescript
import { machineLearningSynapseSpark } from '@cdktf/provider-azurerm'

new machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineLearningSynapseSparkIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

---


### MachineLearningSynapseSparkTimeoutsOutputReference <a name="MachineLearningSynapseSparkTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer"></a>

```typescript
import { machineLearningSynapseSpark } from '@cdktf/provider-azurerm'

new machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MachineLearningSynapseSparkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a>

---



