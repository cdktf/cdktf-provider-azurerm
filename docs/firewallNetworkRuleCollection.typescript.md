# `firewallNetworkRuleCollection` Submodule <a name="`firewallNetworkRuleCollection` Submodule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallNetworkRuleCollection <a name="FirewallNetworkRuleCollection" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection azurerm_firewall_network_rule_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer"></a>

```typescript
import { firewallNetworkRuleCollection } from '@cdktf/provider-azurerm'

new firewallNetworkRuleCollection.FirewallNetworkRuleCollection(scope: Construct, id: string, config: FirewallNetworkRuleCollectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig">FirewallNetworkRuleCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig">FirewallNetworkRuleCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putRule"></a>

```typescript
public putRule(value: IResolvable | FirewallNetworkRuleCollectionRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putTimeouts"></a>

```typescript
public putTimeouts(value: FirewallNetworkRuleCollectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirewallNetworkRuleCollection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isConstruct"></a>

```typescript
import { firewallNetworkRuleCollection } from '@cdktf/provider-azurerm'

firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformElement"></a>

```typescript
import { firewallNetworkRuleCollection } from '@cdktf/provider-azurerm'

firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformResource"></a>

```typescript
import { firewallNetworkRuleCollection } from '@cdktf/provider-azurerm'

firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport"></a>

```typescript
import { firewallNetworkRuleCollection } from '@cdktf/provider-azurerm'

firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FirewallNetworkRuleCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirewallNetworkRuleCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirewallNetworkRuleCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirewallNetworkRuleCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList">FirewallNetworkRuleCollectionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference">FirewallNetworkRuleCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.azureFirewallNameInput">azureFirewallNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.azureFirewallName">azureFirewallName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.rule"></a>

```typescript
public readonly rule: FirewallNetworkRuleCollectionRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList">FirewallNetworkRuleCollectionRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.timeouts"></a>

```typescript
public readonly timeouts: FirewallNetworkRuleCollectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference">FirewallNetworkRuleCollectionTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `azureFirewallNameInput`<sup>Optional</sup> <a name="azureFirewallNameInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.azureFirewallNameInput"></a>

```typescript
public readonly azureFirewallNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | FirewallNetworkRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FirewallNetworkRuleCollectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `azureFirewallName`<sup>Required</sup> <a name="azureFirewallName" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.azureFirewallName"></a>

```typescript
public readonly azureFirewallName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallNetworkRuleCollectionConfig <a name="FirewallNetworkRuleCollectionConfig" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.Initializer"></a>

```typescript
import { firewallNetworkRuleCollection } from '@cdktf/provider-azurerm'

const firewallNetworkRuleCollectionConfig: firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#action FirewallNetworkRuleCollection#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.azureFirewallName">azureFirewallName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#azure_firewall_name FirewallNetworkRuleCollection#azure_firewall_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#name FirewallNetworkRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#priority FirewallNetworkRuleCollection#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#resource_group_name FirewallNetworkRuleCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#id FirewallNetworkRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#action FirewallNetworkRuleCollection#action}.

---

##### `azureFirewallName`<sup>Required</sup> <a name="azureFirewallName" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.azureFirewallName"></a>

```typescript
public readonly azureFirewallName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#azure_firewall_name FirewallNetworkRuleCollection#azure_firewall_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#name FirewallNetworkRuleCollection#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#priority FirewallNetworkRuleCollection#priority}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#resource_group_name FirewallNetworkRuleCollection#resource_group_name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | FirewallNetworkRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#rule FirewallNetworkRuleCollection#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#id FirewallNetworkRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirewallNetworkRuleCollectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#timeouts FirewallNetworkRuleCollection#timeouts}

---

### FirewallNetworkRuleCollectionRule <a name="FirewallNetworkRuleCollectionRule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.Initializer"></a>

```typescript
import { firewallNetworkRuleCollection } from '@cdktf/provider-azurerm'

const firewallNetworkRuleCollectionRule: firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#destination_ports FirewallNetworkRuleCollection#destination_ports}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#name FirewallNetworkRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#protocols FirewallNetworkRuleCollection#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#description FirewallNetworkRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#destination_addresses FirewallNetworkRuleCollection#destination_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationFqdns">destinationFqdns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#destination_fqdns FirewallNetworkRuleCollection#destination_fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationIpGroups">destinationIpGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#destination_ip_groups FirewallNetworkRuleCollection#destination_ip_groups}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#source_addresses FirewallNetworkRuleCollection#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.sourceIpGroups">sourceIpGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#source_ip_groups FirewallNetworkRuleCollection#source_ip_groups}. |

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#destination_ports FirewallNetworkRuleCollection#destination_ports}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#name FirewallNetworkRuleCollection#name}.

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#protocols FirewallNetworkRuleCollection#protocols}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#description FirewallNetworkRuleCollection#description}.

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#destination_addresses FirewallNetworkRuleCollection#destination_addresses}.

---

##### `destinationFqdns`<sup>Optional</sup> <a name="destinationFqdns" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationFqdns"></a>

```typescript
public readonly destinationFqdns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#destination_fqdns FirewallNetworkRuleCollection#destination_fqdns}.

---

##### `destinationIpGroups`<sup>Optional</sup> <a name="destinationIpGroups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationIpGroups"></a>

```typescript
public readonly destinationIpGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#destination_ip_groups FirewallNetworkRuleCollection#destination_ip_groups}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#source_addresses FirewallNetworkRuleCollection#source_addresses}.

---

##### `sourceIpGroups`<sup>Optional</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.sourceIpGroups"></a>

```typescript
public readonly sourceIpGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#source_ip_groups FirewallNetworkRuleCollection#source_ip_groups}.

---

### FirewallNetworkRuleCollectionTimeouts <a name="FirewallNetworkRuleCollectionTimeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.Initializer"></a>

```typescript
import { firewallNetworkRuleCollection } from '@cdktf/provider-azurerm'

const firewallNetworkRuleCollectionTimeouts: firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#create FirewallNetworkRuleCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#delete FirewallNetworkRuleCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#read FirewallNetworkRuleCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#update FirewallNetworkRuleCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#create FirewallNetworkRuleCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#delete FirewallNetworkRuleCollection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#read FirewallNetworkRuleCollection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/firewall_network_rule_collection#update FirewallNetworkRuleCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallNetworkRuleCollectionRuleList <a name="FirewallNetworkRuleCollectionRuleList" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer"></a>

```typescript
import { firewallNetworkRuleCollection } from '@cdktf/provider-azurerm'

new firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.get"></a>

```typescript
public get(index: number): FirewallNetworkRuleCollectionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallNetworkRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>[]

---


### FirewallNetworkRuleCollectionRuleOutputReference <a name="FirewallNetworkRuleCollectionRuleOutputReference" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer"></a>

```typescript
import { firewallNetworkRuleCollection } from '@cdktf/provider-azurerm'

new firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationFqdns">resetDestinationFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationIpGroups">resetDestinationIpGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetSourceIpGroups">resetSourceIpGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationAddresses"></a>

```typescript
public resetDestinationAddresses(): void
```

##### `resetDestinationFqdns` <a name="resetDestinationFqdns" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationFqdns"></a>

```typescript
public resetDestinationFqdns(): void
```

##### `resetDestinationIpGroups` <a name="resetDestinationIpGroups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationIpGroups"></a>

```typescript
public resetDestinationIpGroups(): void
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetSourceAddresses"></a>

```typescript
public resetSourceAddresses(): void
```

##### `resetSourceIpGroups` <a name="resetSourceIpGroups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetSourceIpGroups"></a>

```typescript
public resetSourceIpGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationFqdnsInput">destinationFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationIpGroupsInput">destinationIpGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceIpGroupsInput">sourceIpGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationFqdns">destinationFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationIpGroups">destinationIpGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceIpGroups">sourceIpGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationAddressesInput"></a>

```typescript
public readonly destinationAddressesInput: string[];
```

- *Type:* string[]

---

##### `destinationFqdnsInput`<sup>Optional</sup> <a name="destinationFqdnsInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationFqdnsInput"></a>

```typescript
public readonly destinationFqdnsInput: string[];
```

- *Type:* string[]

---

##### `destinationIpGroupsInput`<sup>Optional</sup> <a name="destinationIpGroupsInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationIpGroupsInput"></a>

```typescript
public readonly destinationIpGroupsInput: string[];
```

- *Type:* string[]

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationPortsInput"></a>

```typescript
public readonly destinationPortsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceAddressesInput"></a>

```typescript
public readonly sourceAddressesInput: string[];
```

- *Type:* string[]

---

##### `sourceIpGroupsInput`<sup>Optional</sup> <a name="sourceIpGroupsInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceIpGroupsInput"></a>

```typescript
public readonly sourceIpGroupsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

---

##### `destinationFqdns`<sup>Required</sup> <a name="destinationFqdns" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationFqdns"></a>

```typescript
public readonly destinationFqdns: string[];
```

- *Type:* string[]

---

##### `destinationIpGroups`<sup>Required</sup> <a name="destinationIpGroups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationIpGroups"></a>

```typescript
public readonly destinationIpGroups: string[];
```

- *Type:* string[]

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourceIpGroups`<sup>Required</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceIpGroups"></a>

```typescript
public readonly sourceIpGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallNetworkRuleCollectionRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>

---


### FirewallNetworkRuleCollectionTimeoutsOutputReference <a name="FirewallNetworkRuleCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { firewallNetworkRuleCollection } from '@cdktf/provider-azurerm'

new firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallNetworkRuleCollectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a>

---



