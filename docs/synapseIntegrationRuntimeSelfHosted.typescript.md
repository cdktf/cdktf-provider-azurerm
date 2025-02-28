# `synapseIntegrationRuntimeSelfHosted` Submodule <a name="`synapseIntegrationRuntimeSelfHosted` Submodule" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseIntegrationRuntimeSelfHosted <a name="SynapseIntegrationRuntimeSelfHosted" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted azurerm_synapse_integration_runtime_self_hosted}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.Initializer"></a>

```typescript
import { synapseIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

new synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted(scope: Construct, id: string, config: SynapseIntegrationRuntimeSelfHostedConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig">SynapseIntegrationRuntimeSelfHostedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig">SynapseIntegrationRuntimeSelfHostedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.putTimeouts"></a>

```typescript
public putTimeouts(value: SynapseIntegrationRuntimeSelfHostedTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts">SynapseIntegrationRuntimeSelfHostedTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseIntegrationRuntimeSelfHosted resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isConstruct"></a>

```typescript
import { synapseIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isTerraformElement"></a>

```typescript
import { synapseIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isTerraformResource"></a>

```typescript
import { synapseIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.generateConfigForImport"></a>

```typescript
import { synapseIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SynapseIntegrationRuntimeSelfHosted resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SynapseIntegrationRuntimeSelfHosted to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SynapseIntegrationRuntimeSelfHosted that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SynapseIntegrationRuntimeSelfHosted to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.authorizationKeyPrimary">authorizationKeyPrimary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.authorizationKeySecondary">authorizationKeySecondary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference">SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.synapseWorkspaceIdInput">synapseWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts">SynapseIntegrationRuntimeSelfHostedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorizationKeyPrimary`<sup>Required</sup> <a name="authorizationKeyPrimary" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.authorizationKeyPrimary"></a>

```typescript
public readonly authorizationKeyPrimary: string;
```

- *Type:* string

---

##### `authorizationKeySecondary`<sup>Required</sup> <a name="authorizationKeySecondary" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.authorizationKeySecondary"></a>

```typescript
public readonly authorizationKeySecondary: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.timeouts"></a>

```typescript
public readonly timeouts: SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference">SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `synapseWorkspaceIdInput`<sup>Optional</sup> <a name="synapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.synapseWorkspaceIdInput"></a>

```typescript
public readonly synapseWorkspaceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SynapseIntegrationRuntimeSelfHostedTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts">SynapseIntegrationRuntimeSelfHostedTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.synapseWorkspaceId"></a>

```typescript
public readonly synapseWorkspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseIntegrationRuntimeSelfHostedConfig <a name="SynapseIntegrationRuntimeSelfHostedConfig" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.Initializer"></a>

```typescript
import { synapseIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

const synapseIntegrationRuntimeSelfHostedConfig: synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#name SynapseIntegrationRuntimeSelfHosted#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#synapse_workspace_id SynapseIntegrationRuntimeSelfHosted#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#description SynapseIntegrationRuntimeSelfHosted#description}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#id SynapseIntegrationRuntimeSelfHosted#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts">SynapseIntegrationRuntimeSelfHostedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#name SynapseIntegrationRuntimeSelfHosted#name}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.synapseWorkspaceId"></a>

```typescript
public readonly synapseWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#synapse_workspace_id SynapseIntegrationRuntimeSelfHosted#synapse_workspace_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#description SynapseIntegrationRuntimeSelfHosted#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#id SynapseIntegrationRuntimeSelfHosted#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SynapseIntegrationRuntimeSelfHostedTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts">SynapseIntegrationRuntimeSelfHostedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#timeouts SynapseIntegrationRuntimeSelfHosted#timeouts}

---

### SynapseIntegrationRuntimeSelfHostedTimeouts <a name="SynapseIntegrationRuntimeSelfHostedTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.Initializer"></a>

```typescript
import { synapseIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

const synapseIntegrationRuntimeSelfHostedTimeouts: synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#create SynapseIntegrationRuntimeSelfHosted#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#delete SynapseIntegrationRuntimeSelfHosted#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#read SynapseIntegrationRuntimeSelfHosted#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#update SynapseIntegrationRuntimeSelfHosted#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#create SynapseIntegrationRuntimeSelfHosted#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#delete SynapseIntegrationRuntimeSelfHosted#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#read SynapseIntegrationRuntimeSelfHosted#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/synapse_integration_runtime_self_hosted#update SynapseIntegrationRuntimeSelfHosted#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference <a name="SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer"></a>

```typescript
import { synapseIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

new synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts">SynapseIntegrationRuntimeSelfHostedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SynapseIntegrationRuntimeSelfHostedTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts">SynapseIntegrationRuntimeSelfHostedTimeouts</a>

---



