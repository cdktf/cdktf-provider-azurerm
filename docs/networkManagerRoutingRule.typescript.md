# `networkManagerRoutingRule` Submodule <a name="`networkManagerRoutingRule` Submodule" id="@cdktf/provider-azurerm.networkManagerRoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerRoutingRule <a name="NetworkManagerRoutingRule" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule azurerm_network_manager_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer"></a>

```typescript
import { networkManagerRoutingRule } from '@cdktf/provider-azurerm'

new networkManagerRoutingRule.NetworkManagerRoutingRule(scope: Construct, id: string, config: NetworkManagerRoutingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig">NetworkManagerRoutingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig">NetworkManagerRoutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putNextHop">putNextHop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putDestination"></a>

```typescript
public putDestination(value: NetworkManagerRoutingRuleDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a>

---

##### `putNextHop` <a name="putNextHop" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putNextHop"></a>

```typescript
public putNextHop(value: NetworkManagerRoutingRuleNextHop): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putNextHop.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkManagerRoutingRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkManagerRoutingRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isConstruct"></a>

```typescript
import { networkManagerRoutingRule } from '@cdktf/provider-azurerm'

networkManagerRoutingRule.NetworkManagerRoutingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isTerraformElement"></a>

```typescript
import { networkManagerRoutingRule } from '@cdktf/provider-azurerm'

networkManagerRoutingRule.NetworkManagerRoutingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isTerraformResource"></a>

```typescript
import { networkManagerRoutingRule } from '@cdktf/provider-azurerm'

networkManagerRoutingRule.NetworkManagerRoutingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.generateConfigForImport"></a>

```typescript
import { networkManagerRoutingRule } from '@cdktf/provider-azurerm'

networkManagerRoutingRule.NetworkManagerRoutingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkManagerRoutingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkManagerRoutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkManagerRoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkManagerRoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference">NetworkManagerRoutingRuleDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.nextHop">nextHop</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference">NetworkManagerRoutingRuleNextHopOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference">NetworkManagerRoutingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.nextHopInput">nextHopInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.ruleCollectionIdInput">ruleCollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.ruleCollectionId">ruleCollectionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.destination"></a>

```typescript
public readonly destination: NetworkManagerRoutingRuleDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference">NetworkManagerRoutingRuleDestinationOutputReference</a>

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.nextHop"></a>

```typescript
public readonly nextHop: NetworkManagerRoutingRuleNextHopOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference">NetworkManagerRoutingRuleNextHopOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkManagerRoutingRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference">NetworkManagerRoutingRuleTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.destinationInput"></a>

```typescript
public readonly destinationInput: NetworkManagerRoutingRuleDestination;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nextHopInput`<sup>Optional</sup> <a name="nextHopInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.nextHopInput"></a>

```typescript
public readonly nextHopInput: NetworkManagerRoutingRuleNextHop;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a>

---

##### `ruleCollectionIdInput`<sup>Optional</sup> <a name="ruleCollectionIdInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.ruleCollectionIdInput"></a>

```typescript
public readonly ruleCollectionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkManagerRoutingRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ruleCollectionId`<sup>Required</sup> <a name="ruleCollectionId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.ruleCollectionId"></a>

```typescript
public readonly ruleCollectionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerRoutingRuleConfig <a name="NetworkManagerRoutingRuleConfig" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.Initializer"></a>

```typescript
import { networkManagerRoutingRule } from '@cdktf/provider-azurerm'

const networkManagerRoutingRuleConfig: networkManagerRoutingRule.NetworkManagerRoutingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#name NetworkManagerRoutingRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.nextHop">nextHop</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a></code> | next_hop block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.ruleCollectionId">ruleCollectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#rule_collection_id NetworkManagerRoutingRule#rule_collection_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#description NetworkManagerRoutingRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#id NetworkManagerRoutingRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.destination"></a>

```typescript
public readonly destination: NetworkManagerRoutingRuleDestination;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#destination NetworkManagerRoutingRule#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#name NetworkManagerRoutingRule#name}.

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.nextHop"></a>

```typescript
public readonly nextHop: NetworkManagerRoutingRuleNextHop;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a>

next_hop block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#next_hop NetworkManagerRoutingRule#next_hop}

---

##### `ruleCollectionId`<sup>Required</sup> <a name="ruleCollectionId" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.ruleCollectionId"></a>

```typescript
public readonly ruleCollectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#rule_collection_id NetworkManagerRoutingRule#rule_collection_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#description NetworkManagerRoutingRule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#id NetworkManagerRoutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkManagerRoutingRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#timeouts NetworkManagerRoutingRule#timeouts}

---

### NetworkManagerRoutingRuleDestination <a name="NetworkManagerRoutingRuleDestination" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination.Initializer"></a>

```typescript
import { networkManagerRoutingRule } from '@cdktf/provider-azurerm'

const networkManagerRoutingRuleDestination: networkManagerRoutingRule.NetworkManagerRoutingRuleDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#address NetworkManagerRoutingRule#address}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#type NetworkManagerRoutingRule#type}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#address NetworkManagerRoutingRule#address}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#type NetworkManagerRoutingRule#type}.

---

### NetworkManagerRoutingRuleNextHop <a name="NetworkManagerRoutingRuleNextHop" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop.Initializer"></a>

```typescript
import { networkManagerRoutingRule } from '@cdktf/provider-azurerm'

const networkManagerRoutingRuleNextHop: networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#type NetworkManagerRoutingRule#type}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#address NetworkManagerRoutingRule#address}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#type NetworkManagerRoutingRule#type}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#address NetworkManagerRoutingRule#address}.

---

### NetworkManagerRoutingRuleTimeouts <a name="NetworkManagerRoutingRuleTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.Initializer"></a>

```typescript
import { networkManagerRoutingRule } from '@cdktf/provider-azurerm'

const networkManagerRoutingRuleTimeouts: networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#create NetworkManagerRoutingRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#delete NetworkManagerRoutingRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#read NetworkManagerRoutingRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#update NetworkManagerRoutingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#create NetworkManagerRoutingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#delete NetworkManagerRoutingRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#read NetworkManagerRoutingRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/network_manager_routing_rule#update NetworkManagerRoutingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerRoutingRuleDestinationOutputReference <a name="NetworkManagerRoutingRuleDestinationOutputReference" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.Initializer"></a>

```typescript
import { networkManagerRoutingRule } from '@cdktf/provider-azurerm'

new networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkManagerRoutingRuleDestination;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleDestination">NetworkManagerRoutingRuleDestination</a>

---


### NetworkManagerRoutingRuleNextHopOutputReference <a name="NetworkManagerRoutingRuleNextHopOutputReference" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.Initializer"></a>

```typescript
import { networkManagerRoutingRule } from '@cdktf/provider-azurerm'

new networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.resetAddress">resetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHopOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkManagerRoutingRuleNextHop;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleNextHop">NetworkManagerRoutingRuleNextHop</a>

---


### NetworkManagerRoutingRuleTimeoutsOutputReference <a name="NetworkManagerRoutingRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkManagerRoutingRule } from '@cdktf/provider-azurerm'

new networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkManagerRoutingRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerRoutingRule.NetworkManagerRoutingRuleTimeouts">NetworkManagerRoutingRuleTimeouts</a>

---



