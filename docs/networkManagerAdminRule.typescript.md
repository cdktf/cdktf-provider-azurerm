# `networkManagerAdminRule` Submodule <a name="`networkManagerAdminRule` Submodule" id="@cdktf/provider-azurerm.networkManagerAdminRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerAdminRule <a name="NetworkManagerAdminRule" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule azurerm_network_manager_admin_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer"></a>

```typescript
import { networkManagerAdminRule } from '@cdktf/provider-azurerm'

new networkManagerAdminRule.NetworkManagerAdminRule(scope: Construct, id: string, config: NetworkManagerAdminRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig">NetworkManagerAdminRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig">NetworkManagerAdminRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDestinationPortRanges">resetDestinationPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetSourcePortRanges">resetSourcePortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putDestination"></a>

```typescript
public putDestination(value: IResolvable | NetworkManagerAdminRuleDestination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putDestination.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination">NetworkManagerAdminRuleDestination</a>[]

---

##### `putSource` <a name="putSource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putSource"></a>

```typescript
public putSource(value: IResolvable | NetworkManagerAdminRuleSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource">NetworkManagerAdminRuleSource</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkManagerAdminRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts">NetworkManagerAdminRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetDestinationPortRanges` <a name="resetDestinationPortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDestinationPortRanges"></a>

```typescript
public resetDestinationPortRanges(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSourcePortRanges` <a name="resetSourcePortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetSourcePortRanges"></a>

```typescript
public resetSourcePortRanges(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkManagerAdminRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isConstruct"></a>

```typescript
import { networkManagerAdminRule } from '@cdktf/provider-azurerm'

networkManagerAdminRule.NetworkManagerAdminRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformElement"></a>

```typescript
import { networkManagerAdminRule } from '@cdktf/provider-azurerm'

networkManagerAdminRule.NetworkManagerAdminRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformResource"></a>

```typescript
import { networkManagerAdminRule } from '@cdktf/provider-azurerm'

networkManagerAdminRule.NetworkManagerAdminRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.generateConfigForImport"></a>

```typescript
import { networkManagerAdminRule } from '@cdktf/provider-azurerm'

networkManagerAdminRule.NetworkManagerAdminRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkManagerAdminRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkManagerAdminRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkManagerAdminRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkManagerAdminRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList">NetworkManagerAdminRuleDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList">NetworkManagerAdminRuleSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference">NetworkManagerAdminRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.adminRuleCollectionIdInput">adminRuleCollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationInput">destinationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination">NetworkManagerAdminRuleDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationPortRangesInput">destinationPortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourceInput">sourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource">NetworkManagerAdminRuleSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourcePortRangesInput">sourcePortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts">NetworkManagerAdminRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.adminRuleCollectionId">adminRuleCollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationPortRanges">destinationPortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourcePortRanges">sourcePortRanges</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destination"></a>

```typescript
public readonly destination: NetworkManagerAdminRuleDestinationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList">NetworkManagerAdminRuleDestinationList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.source"></a>

```typescript
public readonly source: NetworkManagerAdminRuleSourceList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList">NetworkManagerAdminRuleSourceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkManagerAdminRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference">NetworkManagerAdminRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `adminRuleCollectionIdInput`<sup>Optional</sup> <a name="adminRuleCollectionIdInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.adminRuleCollectionIdInput"></a>

```typescript
public readonly adminRuleCollectionIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | NetworkManagerAdminRuleDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination">NetworkManagerAdminRuleDestination</a>[]

---

##### `destinationPortRangesInput`<sup>Optional</sup> <a name="destinationPortRangesInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationPortRangesInput"></a>

```typescript
public readonly destinationPortRangesInput: string[];
```

- *Type:* string[]

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | NetworkManagerAdminRuleSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource">NetworkManagerAdminRuleSource</a>[]

---

##### `sourcePortRangesInput`<sup>Optional</sup> <a name="sourcePortRangesInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourcePortRangesInput"></a>

```typescript
public readonly sourcePortRangesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkManagerAdminRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts">NetworkManagerAdminRuleTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `adminRuleCollectionId`<sup>Required</sup> <a name="adminRuleCollectionId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.adminRuleCollectionId"></a>

```typescript
public readonly adminRuleCollectionId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationPortRanges`<sup>Required</sup> <a name="destinationPortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationPortRanges"></a>

```typescript
public readonly destinationPortRanges: string[];
```

- *Type:* string[]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sourcePortRanges`<sup>Required</sup> <a name="sourcePortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourcePortRanges"></a>

```typescript
public readonly sourcePortRanges: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerAdminRuleConfig <a name="NetworkManagerAdminRuleConfig" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.Initializer"></a>

```typescript
import { networkManagerAdminRule } from '@cdktf/provider-azurerm'

const networkManagerAdminRuleConfig: networkManagerAdminRule.NetworkManagerAdminRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#action NetworkManagerAdminRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.adminRuleCollectionId">adminRuleCollectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#admin_rule_collection_id NetworkManagerAdminRule#admin_rule_collection_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.direction">direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#direction NetworkManagerAdminRule#direction}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#name NetworkManagerAdminRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#priority NetworkManagerAdminRule#priority}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#protocol NetworkManagerAdminRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#description NetworkManagerAdminRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.destination">destination</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination">NetworkManagerAdminRuleDestination</a>[]</code> | destination block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.destinationPortRanges">destinationPortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#destination_port_ranges NetworkManagerAdminRule#destination_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#id NetworkManagerAdminRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.source">source</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource">NetworkManagerAdminRuleSource</a>[]</code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.sourcePortRanges">sourcePortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#source_port_ranges NetworkManagerAdminRule#source_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts">NetworkManagerAdminRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#action NetworkManagerAdminRule#action}.

---

##### `adminRuleCollectionId`<sup>Required</sup> <a name="adminRuleCollectionId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.adminRuleCollectionId"></a>

```typescript
public readonly adminRuleCollectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#admin_rule_collection_id NetworkManagerAdminRule#admin_rule_collection_id}.

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#direction NetworkManagerAdminRule#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#name NetworkManagerAdminRule#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#priority NetworkManagerAdminRule#priority}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#protocol NetworkManagerAdminRule#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#description NetworkManagerAdminRule#description}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.destination"></a>

```typescript
public readonly destination: IResolvable | NetworkManagerAdminRuleDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination">NetworkManagerAdminRuleDestination</a>[]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#destination NetworkManagerAdminRule#destination}

---

##### `destinationPortRanges`<sup>Optional</sup> <a name="destinationPortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.destinationPortRanges"></a>

```typescript
public readonly destinationPortRanges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#destination_port_ranges NetworkManagerAdminRule#destination_port_ranges}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#id NetworkManagerAdminRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.source"></a>

```typescript
public readonly source: IResolvable | NetworkManagerAdminRuleSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource">NetworkManagerAdminRuleSource</a>[]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#source NetworkManagerAdminRule#source}

---

##### `sourcePortRanges`<sup>Optional</sup> <a name="sourcePortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.sourcePortRanges"></a>

```typescript
public readonly sourcePortRanges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#source_port_ranges NetworkManagerAdminRule#source_port_ranges}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkManagerAdminRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts">NetworkManagerAdminRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#timeouts NetworkManagerAdminRule#timeouts}

---

### NetworkManagerAdminRuleDestination <a name="NetworkManagerAdminRuleDestination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.Initializer"></a>

```typescript
import { networkManagerAdminRule } from '@cdktf/provider-azurerm'

const networkManagerAdminRuleDestination: networkManagerAdminRule.NetworkManagerAdminRuleDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.property.addressPrefix">addressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#address_prefix NetworkManagerAdminRule#address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.property.addressPrefixType">addressPrefixType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#address_prefix_type NetworkManagerAdminRule#address_prefix_type}. |

---

##### `addressPrefix`<sup>Required</sup> <a name="addressPrefix" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.property.addressPrefix"></a>

```typescript
public readonly addressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#address_prefix NetworkManagerAdminRule#address_prefix}.

---

##### `addressPrefixType`<sup>Required</sup> <a name="addressPrefixType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.property.addressPrefixType"></a>

```typescript
public readonly addressPrefixType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#address_prefix_type NetworkManagerAdminRule#address_prefix_type}.

---

### NetworkManagerAdminRuleSource <a name="NetworkManagerAdminRuleSource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.Initializer"></a>

```typescript
import { networkManagerAdminRule } from '@cdktf/provider-azurerm'

const networkManagerAdminRuleSource: networkManagerAdminRule.NetworkManagerAdminRuleSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.property.addressPrefix">addressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#address_prefix NetworkManagerAdminRule#address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.property.addressPrefixType">addressPrefixType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#address_prefix_type NetworkManagerAdminRule#address_prefix_type}. |

---

##### `addressPrefix`<sup>Required</sup> <a name="addressPrefix" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.property.addressPrefix"></a>

```typescript
public readonly addressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#address_prefix NetworkManagerAdminRule#address_prefix}.

---

##### `addressPrefixType`<sup>Required</sup> <a name="addressPrefixType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.property.addressPrefixType"></a>

```typescript
public readonly addressPrefixType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#address_prefix_type NetworkManagerAdminRule#address_prefix_type}.

---

### NetworkManagerAdminRuleTimeouts <a name="NetworkManagerAdminRuleTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.Initializer"></a>

```typescript
import { networkManagerAdminRule } from '@cdktf/provider-azurerm'

const networkManagerAdminRuleTimeouts: networkManagerAdminRule.NetworkManagerAdminRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#create NetworkManagerAdminRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#delete NetworkManagerAdminRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#read NetworkManagerAdminRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#update NetworkManagerAdminRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#create NetworkManagerAdminRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#delete NetworkManagerAdminRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#read NetworkManagerAdminRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/network_manager_admin_rule#update NetworkManagerAdminRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerAdminRuleDestinationList <a name="NetworkManagerAdminRuleDestinationList" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer"></a>

```typescript
import { networkManagerAdminRule } from '@cdktf/provider-azurerm'

new networkManagerAdminRule.NetworkManagerAdminRuleDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.get"></a>

```typescript
public get(index: number): NetworkManagerAdminRuleDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination">NetworkManagerAdminRuleDestination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkManagerAdminRuleDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination">NetworkManagerAdminRuleDestination</a>[]

---


### NetworkManagerAdminRuleDestinationOutputReference <a name="NetworkManagerAdminRuleDestinationOutputReference" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer"></a>

```typescript
import { networkManagerAdminRule } from '@cdktf/provider-azurerm'

new networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixInput">addressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixTypeInput">addressPrefixTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefix">addressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixType">addressPrefixType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination">NetworkManagerAdminRuleDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressPrefixInput`<sup>Optional</sup> <a name="addressPrefixInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixInput"></a>

```typescript
public readonly addressPrefixInput: string;
```

- *Type:* string

---

##### `addressPrefixTypeInput`<sup>Optional</sup> <a name="addressPrefixTypeInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixTypeInput"></a>

```typescript
public readonly addressPrefixTypeInput: string;
```

- *Type:* string

---

##### `addressPrefix`<sup>Required</sup> <a name="addressPrefix" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefix"></a>

```typescript
public readonly addressPrefix: string;
```

- *Type:* string

---

##### `addressPrefixType`<sup>Required</sup> <a name="addressPrefixType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixType"></a>

```typescript
public readonly addressPrefixType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkManagerAdminRuleDestination;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination">NetworkManagerAdminRuleDestination</a>

---


### NetworkManagerAdminRuleSourceList <a name="NetworkManagerAdminRuleSourceList" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer"></a>

```typescript
import { networkManagerAdminRule } from '@cdktf/provider-azurerm'

new networkManagerAdminRule.NetworkManagerAdminRuleSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.get"></a>

```typescript
public get(index: number): NetworkManagerAdminRuleSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource">NetworkManagerAdminRuleSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkManagerAdminRuleSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource">NetworkManagerAdminRuleSource</a>[]

---


### NetworkManagerAdminRuleSourceOutputReference <a name="NetworkManagerAdminRuleSourceOutputReference" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer"></a>

```typescript
import { networkManagerAdminRule } from '@cdktf/provider-azurerm'

new networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixInput">addressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixTypeInput">addressPrefixTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefix">addressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixType">addressPrefixType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource">NetworkManagerAdminRuleSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressPrefixInput`<sup>Optional</sup> <a name="addressPrefixInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixInput"></a>

```typescript
public readonly addressPrefixInput: string;
```

- *Type:* string

---

##### `addressPrefixTypeInput`<sup>Optional</sup> <a name="addressPrefixTypeInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixTypeInput"></a>

```typescript
public readonly addressPrefixTypeInput: string;
```

- *Type:* string

---

##### `addressPrefix`<sup>Required</sup> <a name="addressPrefix" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefix"></a>

```typescript
public readonly addressPrefix: string;
```

- *Type:* string

---

##### `addressPrefixType`<sup>Required</sup> <a name="addressPrefixType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixType"></a>

```typescript
public readonly addressPrefixType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkManagerAdminRuleSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource">NetworkManagerAdminRuleSource</a>

---


### NetworkManagerAdminRuleTimeoutsOutputReference <a name="NetworkManagerAdminRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkManagerAdminRule } from '@cdktf/provider-azurerm'

new networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts">NetworkManagerAdminRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkManagerAdminRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts">NetworkManagerAdminRuleTimeouts</a>

---



