# `networkManagerRoutingRuleCollection` Submodule <a name="`networkManagerRoutingRuleCollection` Submodule" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerRoutingRuleCollection <a name="NetworkManagerRoutingRuleCollection" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection azurerm_network_manager_routing_rule_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer"></a>

```typescript
import { networkManagerRoutingRuleCollection } from '@cdktf/provider-azurerm'

new networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection(scope: Construct, id: string, config: NetworkManagerRoutingRuleCollectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig">NetworkManagerRoutingRuleCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig">NetworkManagerRoutingRuleCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetBgpRoutePropagationEnabled">resetBgpRoutePropagationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkManagerRoutingRuleCollectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a>

---

##### `resetBgpRoutePropagationEnabled` <a name="resetBgpRoutePropagationEnabled" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetBgpRoutePropagationEnabled"></a>

```typescript
public resetBgpRoutePropagationEnabled(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkManagerRoutingRuleCollection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isConstruct"></a>

```typescript
import { networkManagerRoutingRuleCollection } from '@cdktf/provider-azurerm'

networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformElement"></a>

```typescript
import { networkManagerRoutingRuleCollection } from '@cdktf/provider-azurerm'

networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformResource"></a>

```typescript
import { networkManagerRoutingRuleCollection } from '@cdktf/provider-azurerm'

networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport"></a>

```typescript
import { networkManagerRoutingRuleCollection } from '@cdktf/provider-azurerm'

networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkManagerRoutingRuleCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkManagerRoutingRuleCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkManagerRoutingRuleCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkManagerRoutingRuleCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference">NetworkManagerRoutingRuleCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.bgpRoutePropagationEnabledInput">bgpRoutePropagationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.networkGroupIdsInput">networkGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.routingConfigurationIdInput">routingConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.bgpRoutePropagationEnabled">bgpRoutePropagationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.networkGroupIds">networkGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.routingConfigurationId">routingConfigurationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkManagerRoutingRuleCollectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference">NetworkManagerRoutingRuleCollectionTimeoutsOutputReference</a>

---

##### `bgpRoutePropagationEnabledInput`<sup>Optional</sup> <a name="bgpRoutePropagationEnabledInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.bgpRoutePropagationEnabledInput"></a>

```typescript
public readonly bgpRoutePropagationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkGroupIdsInput`<sup>Optional</sup> <a name="networkGroupIdsInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.networkGroupIdsInput"></a>

```typescript
public readonly networkGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `routingConfigurationIdInput`<sup>Optional</sup> <a name="routingConfigurationIdInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.routingConfigurationIdInput"></a>

```typescript
public readonly routingConfigurationIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkManagerRoutingRuleCollectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a>

---

##### `bgpRoutePropagationEnabled`<sup>Required</sup> <a name="bgpRoutePropagationEnabled" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.bgpRoutePropagationEnabled"></a>

```typescript
public readonly bgpRoutePropagationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkGroupIds`<sup>Required</sup> <a name="networkGroupIds" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.networkGroupIds"></a>

```typescript
public readonly networkGroupIds: string[];
```

- *Type:* string[]

---

##### `routingConfigurationId`<sup>Required</sup> <a name="routingConfigurationId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.routingConfigurationId"></a>

```typescript
public readonly routingConfigurationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerRoutingRuleCollectionConfig <a name="NetworkManagerRoutingRuleCollectionConfig" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.Initializer"></a>

```typescript
import { networkManagerRoutingRuleCollection } from '@cdktf/provider-azurerm'

const networkManagerRoutingRuleCollectionConfig: networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#name NetworkManagerRoutingRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.networkGroupIds">networkGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#network_group_ids NetworkManagerRoutingRuleCollection#network_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.routingConfigurationId">routingConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#routing_configuration_id NetworkManagerRoutingRuleCollection#routing_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.bgpRoutePropagationEnabled">bgpRoutePropagationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#bgp_route_propagation_enabled NetworkManagerRoutingRuleCollection#bgp_route_propagation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#description NetworkManagerRoutingRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#id NetworkManagerRoutingRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#name NetworkManagerRoutingRuleCollection#name}.

---

##### `networkGroupIds`<sup>Required</sup> <a name="networkGroupIds" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.networkGroupIds"></a>

```typescript
public readonly networkGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#network_group_ids NetworkManagerRoutingRuleCollection#network_group_ids}.

---

##### `routingConfigurationId`<sup>Required</sup> <a name="routingConfigurationId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.routingConfigurationId"></a>

```typescript
public readonly routingConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#routing_configuration_id NetworkManagerRoutingRuleCollection#routing_configuration_id}.

---

##### `bgpRoutePropagationEnabled`<sup>Optional</sup> <a name="bgpRoutePropagationEnabled" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.bgpRoutePropagationEnabled"></a>

```typescript
public readonly bgpRoutePropagationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#bgp_route_propagation_enabled NetworkManagerRoutingRuleCollection#bgp_route_propagation_enabled}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#description NetworkManagerRoutingRuleCollection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#id NetworkManagerRoutingRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkManagerRoutingRuleCollectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#timeouts NetworkManagerRoutingRuleCollection#timeouts}

---

### NetworkManagerRoutingRuleCollectionTimeouts <a name="NetworkManagerRoutingRuleCollectionTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.Initializer"></a>

```typescript
import { networkManagerRoutingRuleCollection } from '@cdktf/provider-azurerm'

const networkManagerRoutingRuleCollectionTimeouts: networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#create NetworkManagerRoutingRuleCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#delete NetworkManagerRoutingRuleCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#read NetworkManagerRoutingRuleCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#update NetworkManagerRoutingRuleCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#create NetworkManagerRoutingRuleCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#delete NetworkManagerRoutingRuleCollection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#read NetworkManagerRoutingRuleCollection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/network_manager_routing_rule_collection#update NetworkManagerRoutingRuleCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerRoutingRuleCollectionTimeoutsOutputReference <a name="NetworkManagerRoutingRuleCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkManagerRoutingRuleCollection } from '@cdktf/provider-azurerm'

new networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkManagerRoutingRuleCollectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a>

---



