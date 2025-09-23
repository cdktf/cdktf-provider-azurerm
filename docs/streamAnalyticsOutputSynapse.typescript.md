# `streamAnalyticsOutputSynapse` Submodule <a name="`streamAnalyticsOutputSynapse` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputSynapse <a name="StreamAnalyticsOutputSynapse" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse azurerm_stream_analytics_output_synapse}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.Initializer"></a>

```typescript
import { streamAnalyticsOutputSynapse } from '@cdktf/provider-azurerm'

new streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse(scope: Construct, id: string, config: StreamAnalyticsOutputSynapseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig">StreamAnalyticsOutputSynapseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig">StreamAnalyticsOutputSynapseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.putTimeouts"></a>

```typescript
public putTimeouts(value: StreamAnalyticsOutputSynapseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts">StreamAnalyticsOutputSynapseTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsOutputSynapse resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.isConstruct"></a>

```typescript
import { streamAnalyticsOutputSynapse } from '@cdktf/provider-azurerm'

streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.isTerraformElement"></a>

```typescript
import { streamAnalyticsOutputSynapse } from '@cdktf/provider-azurerm'

streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.isTerraformResource"></a>

```typescript
import { streamAnalyticsOutputSynapse } from '@cdktf/provider-azurerm'

streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.generateConfigForImport"></a>

```typescript
import { streamAnalyticsOutputSynapse } from '@cdktf/provider-azurerm'

streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StreamAnalyticsOutputSynapse resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamAnalyticsOutputSynapse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamAnalyticsOutputSynapse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsOutputSynapse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference">StreamAnalyticsOutputSynapseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.streamAnalyticsJobNameInput">streamAnalyticsJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts">StreamAnalyticsOutputSynapseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.table">table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsOutputSynapseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference">StreamAnalyticsOutputSynapseTimeoutsOutputReference</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `streamAnalyticsJobNameInput`<sup>Optional</sup> <a name="streamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.streamAnalyticsJobNameInput"></a>

```typescript
public readonly streamAnalyticsJobNameInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StreamAnalyticsOutputSynapseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts">StreamAnalyticsOutputSynapseTimeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.streamAnalyticsJobName"></a>

```typescript
public readonly streamAnalyticsJobName: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapse.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputSynapseConfig <a name="StreamAnalyticsOutputSynapseConfig" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.Initializer"></a>

```typescript
import { streamAnalyticsOutputSynapse } from '@cdktf/provider-azurerm'

const streamAnalyticsOutputSynapseConfig: streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#database StreamAnalyticsOutputSynapse#database}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#name StreamAnalyticsOutputSynapse#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#password StreamAnalyticsOutputSynapse#password}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#resource_group_name StreamAnalyticsOutputSynapse#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.server">server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#server StreamAnalyticsOutputSynapse#server}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#stream_analytics_job_name StreamAnalyticsOutputSynapse#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.table">table</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#table StreamAnalyticsOutputSynapse#table}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.user">user</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#user StreamAnalyticsOutputSynapse#user}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#id StreamAnalyticsOutputSynapse#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts">StreamAnalyticsOutputSynapseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#database StreamAnalyticsOutputSynapse#database}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#name StreamAnalyticsOutputSynapse#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#password StreamAnalyticsOutputSynapse#password}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#resource_group_name StreamAnalyticsOutputSynapse#resource_group_name}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#server StreamAnalyticsOutputSynapse#server}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.streamAnalyticsJobName"></a>

```typescript
public readonly streamAnalyticsJobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#stream_analytics_job_name StreamAnalyticsOutputSynapse#stream_analytics_job_name}.

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#table StreamAnalyticsOutputSynapse#table}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#user StreamAnalyticsOutputSynapse#user}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#id StreamAnalyticsOutputSynapse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsOutputSynapseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts">StreamAnalyticsOutputSynapseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#timeouts StreamAnalyticsOutputSynapse#timeouts}

---

### StreamAnalyticsOutputSynapseTimeouts <a name="StreamAnalyticsOutputSynapseTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts.Initializer"></a>

```typescript
import { streamAnalyticsOutputSynapse } from '@cdktf/provider-azurerm'

const streamAnalyticsOutputSynapseTimeouts: streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#create StreamAnalyticsOutputSynapse#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#delete StreamAnalyticsOutputSynapse#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#read StreamAnalyticsOutputSynapse#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#update StreamAnalyticsOutputSynapse#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#create StreamAnalyticsOutputSynapse#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#delete StreamAnalyticsOutputSynapse#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#read StreamAnalyticsOutputSynapse#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_output_synapse#update StreamAnalyticsOutputSynapse#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputSynapseTimeoutsOutputReference <a name="StreamAnalyticsOutputSynapseTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.Initializer"></a>

```typescript
import { streamAnalyticsOutputSynapse } from '@cdktf/provider-azurerm'

new streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts">StreamAnalyticsOutputSynapseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamAnalyticsOutputSynapseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputSynapse.StreamAnalyticsOutputSynapseTimeouts">StreamAnalyticsOutputSynapseTimeouts</a>

---



