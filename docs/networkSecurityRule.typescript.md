# `networkSecurityRule` Submodule <a name="`networkSecurityRule` Submodule" id="@cdktf/provider-azurerm.networkSecurityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityRule <a name="NetworkSecurityRule" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule azurerm_network_security_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer"></a>

```typescript
import { networkSecurityRule } from '@cdktf/provider-azurerm'

new networkSecurityRule.NetworkSecurityRule(scope: Construct, id: string, config: NetworkSecurityRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig">NetworkSecurityRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig">NetworkSecurityRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationAddressPrefix">resetDestinationAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationAddressPrefixes">resetDestinationAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationApplicationSecurityGroupIds">resetDestinationApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationPortRanges">resetDestinationPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourceAddressPrefix">resetSourceAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourceAddressPrefixes">resetSourceAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourceApplicationSecurityGroupIds">resetSourceApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourcePortRanges">resetSourcePortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkSecurityRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationAddressPrefix` <a name="resetDestinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationAddressPrefix"></a>

```typescript
public resetDestinationAddressPrefix(): void
```

##### `resetDestinationAddressPrefixes` <a name="resetDestinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationAddressPrefixes"></a>

```typescript
public resetDestinationAddressPrefixes(): void
```

##### `resetDestinationApplicationSecurityGroupIds` <a name="resetDestinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationApplicationSecurityGroupIds"></a>

```typescript
public resetDestinationApplicationSecurityGroupIds(): void
```

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationPortRange"></a>

```typescript
public resetDestinationPortRange(): void
```

##### `resetDestinationPortRanges` <a name="resetDestinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationPortRanges"></a>

```typescript
public resetDestinationPortRanges(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSourceAddressPrefix` <a name="resetSourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourceAddressPrefix"></a>

```typescript
public resetSourceAddressPrefix(): void
```

##### `resetSourceAddressPrefixes` <a name="resetSourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourceAddressPrefixes"></a>

```typescript
public resetSourceAddressPrefixes(): void
```

##### `resetSourceApplicationSecurityGroupIds` <a name="resetSourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourceApplicationSecurityGroupIds"></a>

```typescript
public resetSourceApplicationSecurityGroupIds(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```

##### `resetSourcePortRanges` <a name="resetSourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourcePortRanges"></a>

```typescript
public resetSourcePortRanges(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isConstruct"></a>

```typescript
import { networkSecurityRule } from '@cdktf/provider-azurerm'

networkSecurityRule.NetworkSecurityRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isTerraformElement"></a>

```typescript
import { networkSecurityRule } from '@cdktf/provider-azurerm'

networkSecurityRule.NetworkSecurityRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isTerraformResource"></a>

```typescript
import { networkSecurityRule } from '@cdktf/provider-azurerm'

networkSecurityRule.NetworkSecurityRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.generateConfigForImport"></a>

```typescript
import { networkSecurityRule } from '@cdktf/provider-azurerm'

networkSecurityRule.NetworkSecurityRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkSecurityRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference">NetworkSecurityRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.accessInput">accessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixesInput">destinationAddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixInput">destinationAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationApplicationSecurityGroupIdsInput">destinationApplicationSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRangesInput">destinationPortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.networkSecurityGroupNameInput">networkSecurityGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixesInput">sourceAddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixInput">sourceAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceApplicationSecurityGroupIdsInput">sourceApplicationSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRangesInput">sourcePortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.access">access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefix">destinationAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixes">destinationAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationApplicationSecurityGroupIds">destinationApplicationSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRange">destinationPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRanges">destinationPortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.networkSecurityGroupName">networkSecurityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefix">sourceAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixes">sourceAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceApplicationSecurityGroupIds">sourceApplicationSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRange">sourcePortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRanges">sourcePortRanges</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference">NetworkSecurityRuleTimeoutsOutputReference</a>

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.accessInput"></a>

```typescript
public readonly accessInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationAddressPrefixesInput`<sup>Optional</sup> <a name="destinationAddressPrefixesInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixesInput"></a>

```typescript
public readonly destinationAddressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `destinationAddressPrefixInput`<sup>Optional</sup> <a name="destinationAddressPrefixInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixInput"></a>

```typescript
public readonly destinationAddressPrefixInput: string;
```

- *Type:* string

---

##### `destinationApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="destinationApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationApplicationSecurityGroupIdsInput"></a>

```typescript
public readonly destinationApplicationSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRangeInput"></a>

```typescript
public readonly destinationPortRangeInput: string;
```

- *Type:* string

---

##### `destinationPortRangesInput`<sup>Optional</sup> <a name="destinationPortRangesInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRangesInput"></a>

```typescript
public readonly destinationPortRangesInput: string[];
```

- *Type:* string[]

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkSecurityGroupNameInput`<sup>Optional</sup> <a name="networkSecurityGroupNameInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.networkSecurityGroupNameInput"></a>

```typescript
public readonly networkSecurityGroupNameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sourceAddressPrefixesInput`<sup>Optional</sup> <a name="sourceAddressPrefixesInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixesInput"></a>

```typescript
public readonly sourceAddressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `sourceAddressPrefixInput`<sup>Optional</sup> <a name="sourceAddressPrefixInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixInput"></a>

```typescript
public readonly sourceAddressPrefixInput: string;
```

- *Type:* string

---

##### `sourceApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="sourceApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceApplicationSecurityGroupIdsInput"></a>

```typescript
public readonly sourceApplicationSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: string;
```

- *Type:* string

---

##### `sourcePortRangesInput`<sup>Optional</sup> <a name="sourcePortRangesInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRangesInput"></a>

```typescript
public readonly sourcePortRangesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkSecurityRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a>

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationAddressPrefix`<sup>Required</sup> <a name="destinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefix"></a>

```typescript
public readonly destinationAddressPrefix: string;
```

- *Type:* string

---

##### `destinationAddressPrefixes`<sup>Required</sup> <a name="destinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixes"></a>

```typescript
public readonly destinationAddressPrefixes: string[];
```

- *Type:* string[]

---

##### `destinationApplicationSecurityGroupIds`<sup>Required</sup> <a name="destinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationApplicationSecurityGroupIds"></a>

```typescript
public readonly destinationApplicationSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: string;
```

- *Type:* string

---

##### `destinationPortRanges`<sup>Required</sup> <a name="destinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRanges"></a>

```typescript
public readonly destinationPortRanges: string[];
```

- *Type:* string[]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkSecurityGroupName`<sup>Required</sup> <a name="networkSecurityGroupName" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.networkSecurityGroupName"></a>

```typescript
public readonly networkSecurityGroupName: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sourceAddressPrefix`<sup>Required</sup> <a name="sourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefix"></a>

```typescript
public readonly sourceAddressPrefix: string;
```

- *Type:* string

---

##### `sourceAddressPrefixes`<sup>Required</sup> <a name="sourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixes"></a>

```typescript
public readonly sourceAddressPrefixes: string[];
```

- *Type:* string[]

---

##### `sourceApplicationSecurityGroupIds`<sup>Required</sup> <a name="sourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceApplicationSecurityGroupIds"></a>

```typescript
public readonly sourceApplicationSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: string;
```

- *Type:* string

---

##### `sourcePortRanges`<sup>Required</sup> <a name="sourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRanges"></a>

```typescript
public readonly sourcePortRanges: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityRuleConfig <a name="NetworkSecurityRuleConfig" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.Initializer"></a>

```typescript
import { networkSecurityRule } from '@cdktf/provider-azurerm'

const networkSecurityRuleConfig: networkSecurityRule.NetworkSecurityRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.access">access</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#access NetworkSecurityRule#access}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.direction">direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#direction NetworkSecurityRule#direction}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#name NetworkSecurityRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.networkSecurityGroupName">networkSecurityGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#network_security_group_name NetworkSecurityRule#network_security_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#priority NetworkSecurityRule#priority}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#protocol NetworkSecurityRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#resource_group_name NetworkSecurityRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#description NetworkSecurityRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationAddressPrefix">destinationAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#destination_address_prefix NetworkSecurityRule#destination_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationAddressPrefixes">destinationAddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#destination_address_prefixes NetworkSecurityRule#destination_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationApplicationSecurityGroupIds">destinationApplicationSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#destination_application_security_group_ids NetworkSecurityRule#destination_application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationPortRange">destinationPortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#destination_port_range NetworkSecurityRule#destination_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationPortRanges">destinationPortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#destination_port_ranges NetworkSecurityRule#destination_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#id NetworkSecurityRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceAddressPrefix">sourceAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#source_address_prefix NetworkSecurityRule#source_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceAddressPrefixes">sourceAddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#source_address_prefixes NetworkSecurityRule#source_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceApplicationSecurityGroupIds">sourceApplicationSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#source_application_security_group_ids NetworkSecurityRule#source_application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourcePortRange">sourcePortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#source_port_range NetworkSecurityRule#source_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourcePortRanges">sourcePortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#source_port_ranges NetworkSecurityRule#source_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#access NetworkSecurityRule#access}.

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#direction NetworkSecurityRule#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#name NetworkSecurityRule#name}.

---

##### `networkSecurityGroupName`<sup>Required</sup> <a name="networkSecurityGroupName" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.networkSecurityGroupName"></a>

```typescript
public readonly networkSecurityGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#network_security_group_name NetworkSecurityRule#network_security_group_name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#priority NetworkSecurityRule#priority}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#protocol NetworkSecurityRule#protocol}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#resource_group_name NetworkSecurityRule#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#description NetworkSecurityRule#description}.

---

##### `destinationAddressPrefix`<sup>Optional</sup> <a name="destinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationAddressPrefix"></a>

```typescript
public readonly destinationAddressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#destination_address_prefix NetworkSecurityRule#destination_address_prefix}.

---

##### `destinationAddressPrefixes`<sup>Optional</sup> <a name="destinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationAddressPrefixes"></a>

```typescript
public readonly destinationAddressPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#destination_address_prefixes NetworkSecurityRule#destination_address_prefixes}.

---

##### `destinationApplicationSecurityGroupIds`<sup>Optional</sup> <a name="destinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationApplicationSecurityGroupIds"></a>

```typescript
public readonly destinationApplicationSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#destination_application_security_group_ids NetworkSecurityRule#destination_application_security_group_ids}.

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#destination_port_range NetworkSecurityRule#destination_port_range}.

---

##### `destinationPortRanges`<sup>Optional</sup> <a name="destinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationPortRanges"></a>

```typescript
public readonly destinationPortRanges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#destination_port_ranges NetworkSecurityRule#destination_port_ranges}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#id NetworkSecurityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceAddressPrefix`<sup>Optional</sup> <a name="sourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceAddressPrefix"></a>

```typescript
public readonly sourceAddressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#source_address_prefix NetworkSecurityRule#source_address_prefix}.

---

##### `sourceAddressPrefixes`<sup>Optional</sup> <a name="sourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceAddressPrefixes"></a>

```typescript
public readonly sourceAddressPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#source_address_prefixes NetworkSecurityRule#source_address_prefixes}.

---

##### `sourceApplicationSecurityGroupIds`<sup>Optional</sup> <a name="sourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceApplicationSecurityGroupIds"></a>

```typescript
public readonly sourceApplicationSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#source_application_security_group_ids NetworkSecurityRule#source_application_security_group_ids}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#source_port_range NetworkSecurityRule#source_port_range}.

---

##### `sourcePortRanges`<sup>Optional</sup> <a name="sourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourcePortRanges"></a>

```typescript
public readonly sourcePortRanges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#source_port_ranges NetworkSecurityRule#source_port_ranges}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#timeouts NetworkSecurityRule#timeouts}

---

### NetworkSecurityRuleTimeouts <a name="NetworkSecurityRuleTimeouts" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.Initializer"></a>

```typescript
import { networkSecurityRule } from '@cdktf/provider-azurerm'

const networkSecurityRuleTimeouts: networkSecurityRule.NetworkSecurityRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#create NetworkSecurityRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#delete NetworkSecurityRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#read NetworkSecurityRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#update NetworkSecurityRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#create NetworkSecurityRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#delete NetworkSecurityRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#read NetworkSecurityRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/network_security_rule#update NetworkSecurityRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityRuleTimeoutsOutputReference <a name="NetworkSecurityRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkSecurityRule } from '@cdktf/provider-azurerm'

new networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a>

---



