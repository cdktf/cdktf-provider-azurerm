# `firewallNatRuleCollection` Submodule <a name="`firewallNatRuleCollection` Submodule" id="@cdktf/provider-azurerm.firewallNatRuleCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallNatRuleCollection <a name="FirewallNatRuleCollection" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection azurerm_firewall_nat_rule_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer"></a>

```typescript
import { firewallNatRuleCollection } from '@cdktf/provider-azurerm'

new firewallNatRuleCollection.FirewallNatRuleCollection(scope: Construct, id: string, config: FirewallNatRuleCollectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig">FirewallNatRuleCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig">FirewallNatRuleCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putRule"></a>

```typescript
public putRule(value: IResolvable | FirewallNatRuleCollectionRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putTimeouts"></a>

```typescript
public putTimeouts(value: FirewallNatRuleCollectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirewallNatRuleCollection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isConstruct"></a>

```typescript
import { firewallNatRuleCollection } from '@cdktf/provider-azurerm'

firewallNatRuleCollection.FirewallNatRuleCollection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformElement"></a>

```typescript
import { firewallNatRuleCollection } from '@cdktf/provider-azurerm'

firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformResource"></a>

```typescript
import { firewallNatRuleCollection } from '@cdktf/provider-azurerm'

firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.generateConfigForImport"></a>

```typescript
import { firewallNatRuleCollection } from '@cdktf/provider-azurerm'

firewallNatRuleCollection.FirewallNatRuleCollection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FirewallNatRuleCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirewallNatRuleCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirewallNatRuleCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirewallNatRuleCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList">FirewallNatRuleCollectionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference">FirewallNatRuleCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.azureFirewallNameInput">azureFirewallNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.azureFirewallName">azureFirewallName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.rule"></a>

```typescript
public readonly rule: FirewallNatRuleCollectionRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList">FirewallNatRuleCollectionRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.timeouts"></a>

```typescript
public readonly timeouts: FirewallNatRuleCollectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference">FirewallNatRuleCollectionTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `azureFirewallNameInput`<sup>Optional</sup> <a name="azureFirewallNameInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.azureFirewallNameInput"></a>

```typescript
public readonly azureFirewallNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | FirewallNatRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FirewallNatRuleCollectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `azureFirewallName`<sup>Required</sup> <a name="azureFirewallName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.azureFirewallName"></a>

```typescript
public readonly azureFirewallName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallNatRuleCollectionConfig <a name="FirewallNatRuleCollectionConfig" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.Initializer"></a>

```typescript
import { firewallNatRuleCollection } from '@cdktf/provider-azurerm'

const firewallNatRuleCollectionConfig: firewallNatRuleCollection.FirewallNatRuleCollectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#action FirewallNatRuleCollection#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.azureFirewallName">azureFirewallName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#azure_firewall_name FirewallNatRuleCollection#azure_firewall_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#priority FirewallNatRuleCollection#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#resource_group_name FirewallNatRuleCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#id FirewallNatRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#action FirewallNatRuleCollection#action}.

---

##### `azureFirewallName`<sup>Required</sup> <a name="azureFirewallName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.azureFirewallName"></a>

```typescript
public readonly azureFirewallName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#azure_firewall_name FirewallNatRuleCollection#azure_firewall_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#priority FirewallNatRuleCollection#priority}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#resource_group_name FirewallNatRuleCollection#resource_group_name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | FirewallNatRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#rule FirewallNatRuleCollection#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#id FirewallNatRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirewallNatRuleCollectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#timeouts FirewallNatRuleCollection#timeouts}

---

### FirewallNatRuleCollectionRule <a name="FirewallNatRuleCollectionRule" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.Initializer"></a>

```typescript
import { firewallNatRuleCollection } from '@cdktf/provider-azurerm'

const firewallNatRuleCollectionRule: firewallNatRuleCollection.FirewallNatRuleCollectionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#destination_addresses FirewallNatRuleCollection#destination_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#destination_ports FirewallNatRuleCollection#destination_ports}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#protocols FirewallNatRuleCollection#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.translatedAddress">translatedAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#translated_address FirewallNatRuleCollection#translated_address}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.translatedPort">translatedPort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#translated_port FirewallNatRuleCollection#translated_port}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#description FirewallNatRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#source_addresses FirewallNatRuleCollection#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.sourceIpGroups">sourceIpGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#source_ip_groups FirewallNatRuleCollection#source_ip_groups}. |

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#destination_addresses FirewallNatRuleCollection#destination_addresses}.

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#destination_ports FirewallNatRuleCollection#destination_ports}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}.

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#protocols FirewallNatRuleCollection#protocols}.

---

##### `translatedAddress`<sup>Required</sup> <a name="translatedAddress" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.translatedAddress"></a>

```typescript
public readonly translatedAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#translated_address FirewallNatRuleCollection#translated_address}.

---

##### `translatedPort`<sup>Required</sup> <a name="translatedPort" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.translatedPort"></a>

```typescript
public readonly translatedPort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#translated_port FirewallNatRuleCollection#translated_port}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#description FirewallNatRuleCollection#description}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#source_addresses FirewallNatRuleCollection#source_addresses}.

---

##### `sourceIpGroups`<sup>Optional</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.sourceIpGroups"></a>

```typescript
public readonly sourceIpGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#source_ip_groups FirewallNatRuleCollection#source_ip_groups}.

---

### FirewallNatRuleCollectionTimeouts <a name="FirewallNatRuleCollectionTimeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.Initializer"></a>

```typescript
import { firewallNatRuleCollection } from '@cdktf/provider-azurerm'

const firewallNatRuleCollectionTimeouts: firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#create FirewallNatRuleCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#delete FirewallNatRuleCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#read FirewallNatRuleCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#update FirewallNatRuleCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#create FirewallNatRuleCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#delete FirewallNatRuleCollection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#read FirewallNatRuleCollection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/firewall_nat_rule_collection#update FirewallNatRuleCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallNatRuleCollectionRuleList <a name="FirewallNatRuleCollectionRuleList" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer"></a>

```typescript
import { firewallNatRuleCollection } from '@cdktf/provider-azurerm'

new firewallNatRuleCollection.FirewallNatRuleCollectionRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.get"></a>

```typescript
public get(index: number): FirewallNatRuleCollectionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallNatRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>[]

---


### FirewallNatRuleCollectionRuleOutputReference <a name="FirewallNatRuleCollectionRuleOutputReference" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer"></a>

```typescript
import { firewallNatRuleCollection } from '@cdktf/provider-azurerm'

new firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetSourceIpGroups">resetSourceIpGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetSourceAddresses"></a>

```typescript
public resetSourceAddresses(): void
```

##### `resetSourceIpGroups` <a name="resetSourceIpGroups" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetSourceIpGroups"></a>

```typescript
public resetSourceIpGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceIpGroupsInput">sourceIpGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedAddressInput">translatedAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedPortInput">translatedPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceIpGroups">sourceIpGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedAddress">translatedAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedPort">translatedPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationAddressesInput"></a>

```typescript
public readonly destinationAddressesInput: string[];
```

- *Type:* string[]

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationPortsInput"></a>

```typescript
public readonly destinationPortsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceAddressesInput"></a>

```typescript
public readonly sourceAddressesInput: string[];
```

- *Type:* string[]

---

##### `sourceIpGroupsInput`<sup>Optional</sup> <a name="sourceIpGroupsInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceIpGroupsInput"></a>

```typescript
public readonly sourceIpGroupsInput: string[];
```

- *Type:* string[]

---

##### `translatedAddressInput`<sup>Optional</sup> <a name="translatedAddressInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedAddressInput"></a>

```typescript
public readonly translatedAddressInput: string;
```

- *Type:* string

---

##### `translatedPortInput`<sup>Optional</sup> <a name="translatedPortInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedPortInput"></a>

```typescript
public readonly translatedPortInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourceIpGroups`<sup>Required</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceIpGroups"></a>

```typescript
public readonly sourceIpGroups: string[];
```

- *Type:* string[]

---

##### `translatedAddress`<sup>Required</sup> <a name="translatedAddress" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedAddress"></a>

```typescript
public readonly translatedAddress: string;
```

- *Type:* string

---

##### `translatedPort`<sup>Required</sup> <a name="translatedPort" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedPort"></a>

```typescript
public readonly translatedPort: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallNatRuleCollectionRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>

---


### FirewallNatRuleCollectionTimeoutsOutputReference <a name="FirewallNatRuleCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { firewallNatRuleCollection } from '@cdktf/provider-azurerm'

new firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallNatRuleCollectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a>

---



