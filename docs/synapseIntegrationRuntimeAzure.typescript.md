# `synapseIntegrationRuntimeAzure` Submodule <a name="`synapseIntegrationRuntimeAzure` Submodule" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseIntegrationRuntimeAzure <a name="SynapseIntegrationRuntimeAzure" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure azurerm_synapse_integration_runtime_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer"></a>

```typescript
import { synapseIntegrationRuntimeAzure } from '@cdktf/provider-azurerm'

new synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure(scope: Construct, id: string, config: SynapseIntegrationRuntimeAzureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig">SynapseIntegrationRuntimeAzureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig">SynapseIntegrationRuntimeAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetComputeType">resetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetCoreCount">resetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetTimeToLiveMin">resetTimeToLiveMin</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.putTimeouts"></a>

```typescript
public putTimeouts(value: SynapseIntegrationRuntimeAzureTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a>

---

##### `resetComputeType` <a name="resetComputeType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetComputeType"></a>

```typescript
public resetComputeType(): void
```

##### `resetCoreCount` <a name="resetCoreCount" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetCoreCount"></a>

```typescript
public resetCoreCount(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeToLiveMin` <a name="resetTimeToLiveMin" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetTimeToLiveMin"></a>

```typescript
public resetTimeToLiveMin(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseIntegrationRuntimeAzure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isConstruct"></a>

```typescript
import { synapseIntegrationRuntimeAzure } from '@cdktf/provider-azurerm'

synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformElement"></a>

```typescript
import { synapseIntegrationRuntimeAzure } from '@cdktf/provider-azurerm'

synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformResource"></a>

```typescript
import { synapseIntegrationRuntimeAzure } from '@cdktf/provider-azurerm'

synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport"></a>

```typescript
import { synapseIntegrationRuntimeAzure } from '@cdktf/provider-azurerm'

synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SynapseIntegrationRuntimeAzure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SynapseIntegrationRuntimeAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SynapseIntegrationRuntimeAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SynapseIntegrationRuntimeAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference">SynapseIntegrationRuntimeAzureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.computeTypeInput">computeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.coreCountInput">coreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.synapseWorkspaceIdInput">synapseWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeToLiveMinInput">timeToLiveMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.computeType">computeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.coreCount">coreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeToLiveMin">timeToLiveMin</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeouts"></a>

```typescript
public readonly timeouts: SynapseIntegrationRuntimeAzureTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference">SynapseIntegrationRuntimeAzureTimeoutsOutputReference</a>

---

##### `computeTypeInput`<sup>Optional</sup> <a name="computeTypeInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.computeTypeInput"></a>

```typescript
public readonly computeTypeInput: string;
```

- *Type:* string

---

##### `coreCountInput`<sup>Optional</sup> <a name="coreCountInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.coreCountInput"></a>

```typescript
public readonly coreCountInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `synapseWorkspaceIdInput`<sup>Optional</sup> <a name="synapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.synapseWorkspaceIdInput"></a>

```typescript
public readonly synapseWorkspaceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SynapseIntegrationRuntimeAzureTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a>

---

##### `timeToLiveMinInput`<sup>Optional</sup> <a name="timeToLiveMinInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeToLiveMinInput"></a>

```typescript
public readonly timeToLiveMinInput: number;
```

- *Type:* number

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.synapseWorkspaceId"></a>

```typescript
public readonly synapseWorkspaceId: string;
```

- *Type:* string

---

##### `timeToLiveMin`<sup>Required</sup> <a name="timeToLiveMin" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeToLiveMin"></a>

```typescript
public readonly timeToLiveMin: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseIntegrationRuntimeAzureConfig <a name="SynapseIntegrationRuntimeAzureConfig" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.Initializer"></a>

```typescript
import { synapseIntegrationRuntimeAzure } from '@cdktf/provider-azurerm'

const synapseIntegrationRuntimeAzureConfig: synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#location SynapseIntegrationRuntimeAzure#location}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#name SynapseIntegrationRuntimeAzure#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#synapse_workspace_id SynapseIntegrationRuntimeAzure#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.computeType">computeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#compute_type SynapseIntegrationRuntimeAzure#compute_type}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.coreCount">coreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#core_count SynapseIntegrationRuntimeAzure#core_count}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#description SynapseIntegrationRuntimeAzure#description}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#id SynapseIntegrationRuntimeAzure#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.timeToLiveMin">timeToLiveMin</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#time_to_live_min SynapseIntegrationRuntimeAzure#time_to_live_min}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#location SynapseIntegrationRuntimeAzure#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#name SynapseIntegrationRuntimeAzure#name}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.synapseWorkspaceId"></a>

```typescript
public readonly synapseWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#synapse_workspace_id SynapseIntegrationRuntimeAzure#synapse_workspace_id}.

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#compute_type SynapseIntegrationRuntimeAzure#compute_type}.

---

##### `coreCount`<sup>Optional</sup> <a name="coreCount" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#core_count SynapseIntegrationRuntimeAzure#core_count}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#description SynapseIntegrationRuntimeAzure#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#id SynapseIntegrationRuntimeAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SynapseIntegrationRuntimeAzureTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#timeouts SynapseIntegrationRuntimeAzure#timeouts}

---

##### `timeToLiveMin`<sup>Optional</sup> <a name="timeToLiveMin" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.timeToLiveMin"></a>

```typescript
public readonly timeToLiveMin: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#time_to_live_min SynapseIntegrationRuntimeAzure#time_to_live_min}.

---

### SynapseIntegrationRuntimeAzureTimeouts <a name="SynapseIntegrationRuntimeAzureTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.Initializer"></a>

```typescript
import { synapseIntegrationRuntimeAzure } from '@cdktf/provider-azurerm'

const synapseIntegrationRuntimeAzureTimeouts: synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#create SynapseIntegrationRuntimeAzure#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#delete SynapseIntegrationRuntimeAzure#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#read SynapseIntegrationRuntimeAzure#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#update SynapseIntegrationRuntimeAzure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#create SynapseIntegrationRuntimeAzure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#delete SynapseIntegrationRuntimeAzure#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#read SynapseIntegrationRuntimeAzure#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/synapse_integration_runtime_azure#update SynapseIntegrationRuntimeAzure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseIntegrationRuntimeAzureTimeoutsOutputReference <a name="SynapseIntegrationRuntimeAzureTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer"></a>

```typescript
import { synapseIntegrationRuntimeAzure } from '@cdktf/provider-azurerm'

new synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SynapseIntegrationRuntimeAzureTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a>

---



