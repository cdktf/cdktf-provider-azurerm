# `azurerm_synapse_private_link_hub`

Refer to the Terraform Registory for docs: [`azurerm_synapse_private_link_hub`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub).

# `synapsePrivateLinkHub` Submodule <a name="`synapsePrivateLinkHub` Submodule" id="@cdktf/provider-azurerm.synapsePrivateLinkHub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapsePrivateLinkHub <a name="SynapsePrivateLinkHub" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub azurerm_synapse_private_link_hub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.Initializer"></a>

```typescript
import { synapsePrivateLinkHub } from '@cdktf/provider-azurerm'

new synapsePrivateLinkHub.SynapsePrivateLinkHub(scope: Construct, id: string, config: SynapsePrivateLinkHubConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig">SynapsePrivateLinkHubConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig">SynapsePrivateLinkHubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.putTimeouts"></a>

```typescript
public putTimeouts(value: SynapsePrivateLinkHubTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts">SynapsePrivateLinkHubTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SynapsePrivateLinkHub resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.isConstruct"></a>

```typescript
import { synapsePrivateLinkHub } from '@cdktf/provider-azurerm'

synapsePrivateLinkHub.SynapsePrivateLinkHub.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.isTerraformElement"></a>

```typescript
import { synapsePrivateLinkHub } from '@cdktf/provider-azurerm'

synapsePrivateLinkHub.SynapsePrivateLinkHub.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.isTerraformResource"></a>

```typescript
import { synapsePrivateLinkHub } from '@cdktf/provider-azurerm'

synapsePrivateLinkHub.SynapsePrivateLinkHub.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.generateConfigForImport"></a>

```typescript
import { synapsePrivateLinkHub } from '@cdktf/provider-azurerm'

synapsePrivateLinkHub.SynapsePrivateLinkHub.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SynapsePrivateLinkHub resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SynapsePrivateLinkHub to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SynapsePrivateLinkHub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SynapsePrivateLinkHub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference">SynapsePrivateLinkHubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts">SynapsePrivateLinkHubTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.timeouts"></a>

```typescript
public readonly timeouts: SynapsePrivateLinkHubTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference">SynapsePrivateLinkHubTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SynapsePrivateLinkHubTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts">SynapsePrivateLinkHubTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHub.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapsePrivateLinkHubConfig <a name="SynapsePrivateLinkHubConfig" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.Initializer"></a>

```typescript
import { synapsePrivateLinkHub } from '@cdktf/provider-azurerm'

const synapsePrivateLinkHubConfig: synapsePrivateLinkHub.SynapsePrivateLinkHubConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#location SynapsePrivateLinkHub#location}. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#name SynapsePrivateLinkHub#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#resource_group_name SynapsePrivateLinkHub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#id SynapsePrivateLinkHub#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#tags SynapsePrivateLinkHub#tags}. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts">SynapsePrivateLinkHubTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#location SynapsePrivateLinkHub#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#name SynapsePrivateLinkHub#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#resource_group_name SynapsePrivateLinkHub#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#id SynapsePrivateLinkHub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#tags SynapsePrivateLinkHub#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SynapsePrivateLinkHubTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts">SynapsePrivateLinkHubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#timeouts SynapsePrivateLinkHub#timeouts}

---

### SynapsePrivateLinkHubTimeouts <a name="SynapsePrivateLinkHubTimeouts" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts.Initializer"></a>

```typescript
import { synapsePrivateLinkHub } from '@cdktf/provider-azurerm'

const synapsePrivateLinkHubTimeouts: synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#create SynapsePrivateLinkHub#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#delete SynapsePrivateLinkHub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#read SynapsePrivateLinkHub#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#update SynapsePrivateLinkHub#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#create SynapsePrivateLinkHub#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#delete SynapsePrivateLinkHub#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#read SynapsePrivateLinkHub#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_private_link_hub#update SynapsePrivateLinkHub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapsePrivateLinkHubTimeoutsOutputReference <a name="SynapsePrivateLinkHubTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.Initializer"></a>

```typescript
import { synapsePrivateLinkHub } from '@cdktf/provider-azurerm'

new synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts">SynapsePrivateLinkHubTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SynapsePrivateLinkHubTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.synapsePrivateLinkHub.SynapsePrivateLinkHubTimeouts">SynapsePrivateLinkHubTimeouts</a>

---



