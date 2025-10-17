# `firewallPolicyRuleCollectionGroup` Submodule <a name="`firewallPolicyRuleCollectionGroup` Submodule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallPolicyRuleCollectionGroup <a name="FirewallPolicyRuleCollectionGroup" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group azurerm_firewall_policy_rule_collection_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup(scope: Construct, id: string, config: FirewallPolicyRuleCollectionGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig">FirewallPolicyRuleCollectionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig">FirewallPolicyRuleCollectionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putApplicationRuleCollection">putApplicationRuleCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putNatRuleCollection">putNatRuleCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putNetworkRuleCollection">putNetworkRuleCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetApplicationRuleCollection">resetApplicationRuleCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetNatRuleCollection">resetNatRuleCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetNetworkRuleCollection">resetNetworkRuleCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationRuleCollection` <a name="putApplicationRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putApplicationRuleCollection"></a>

```typescript
public putApplicationRuleCollection(value: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollection[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putApplicationRuleCollection.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>[]

---

##### `putNatRuleCollection` <a name="putNatRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putNatRuleCollection"></a>

```typescript
public putNatRuleCollection(value: IResolvable | FirewallPolicyRuleCollectionGroupNatRuleCollection[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putNatRuleCollection.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>[]

---

##### `putNetworkRuleCollection` <a name="putNetworkRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putNetworkRuleCollection"></a>

```typescript
public putNetworkRuleCollection(value: IResolvable | FirewallPolicyRuleCollectionGroupNetworkRuleCollection[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putNetworkRuleCollection.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: FirewallPolicyRuleCollectionGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a>

---

##### `resetApplicationRuleCollection` <a name="resetApplicationRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetApplicationRuleCollection"></a>

```typescript
public resetApplicationRuleCollection(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNatRuleCollection` <a name="resetNatRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetNatRuleCollection"></a>

```typescript
public resetNatRuleCollection(): void
```

##### `resetNetworkRuleCollection` <a name="resetNetworkRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetNetworkRuleCollection"></a>

```typescript
public resetNetworkRuleCollection(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirewallPolicyRuleCollectionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isConstruct"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isTerraformElement"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isTerraformResource"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.generateConfigForImport"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FirewallPolicyRuleCollectionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirewallPolicyRuleCollectionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirewallPolicyRuleCollectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirewallPolicyRuleCollectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.applicationRuleCollection">applicationRuleCollection</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.natRuleCollection">natRuleCollection</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList">FirewallPolicyRuleCollectionGroupNatRuleCollectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.networkRuleCollection">networkRuleCollection</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference">FirewallPolicyRuleCollectionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.applicationRuleCollectionInput">applicationRuleCollectionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.firewallPolicyIdInput">firewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.natRuleCollectionInput">natRuleCollectionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.networkRuleCollectionInput">networkRuleCollectionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.firewallPolicyId">firewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.priority">priority</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationRuleCollection`<sup>Required</sup> <a name="applicationRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.applicationRuleCollection"></a>

```typescript
public readonly applicationRuleCollection: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList</a>

---

##### `natRuleCollection`<sup>Required</sup> <a name="natRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.natRuleCollection"></a>

```typescript
public readonly natRuleCollection: FirewallPolicyRuleCollectionGroupNatRuleCollectionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList">FirewallPolicyRuleCollectionGroupNatRuleCollectionList</a>

---

##### `networkRuleCollection`<sup>Required</sup> <a name="networkRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.networkRuleCollection"></a>

```typescript
public readonly networkRuleCollection: FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.timeouts"></a>

```typescript
public readonly timeouts: FirewallPolicyRuleCollectionGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference">FirewallPolicyRuleCollectionGroupTimeoutsOutputReference</a>

---

##### `applicationRuleCollectionInput`<sup>Optional</sup> <a name="applicationRuleCollectionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.applicationRuleCollectionInput"></a>

```typescript
public readonly applicationRuleCollectionInput: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>[]

---

##### `firewallPolicyIdInput`<sup>Optional</sup> <a name="firewallPolicyIdInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.firewallPolicyIdInput"></a>

```typescript
public readonly firewallPolicyIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `natRuleCollectionInput`<sup>Optional</sup> <a name="natRuleCollectionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.natRuleCollectionInput"></a>

```typescript
public readonly natRuleCollectionInput: IResolvable | FirewallPolicyRuleCollectionGroupNatRuleCollection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>[]

---

##### `networkRuleCollectionInput`<sup>Optional</sup> <a name="networkRuleCollectionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.networkRuleCollectionInput"></a>

```typescript
public readonly networkRuleCollectionInput: IResolvable | FirewallPolicyRuleCollectionGroupNetworkRuleCollection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>[]

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FirewallPolicyRuleCollectionGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a>

---

##### `firewallPolicyId`<sup>Required</sup> <a name="firewallPolicyId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.firewallPolicyId"></a>

```typescript
public readonly firewallPolicyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallPolicyRuleCollectionGroupApplicationRuleCollection <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

const firewallPolicyRuleCollectionGroupApplicationRuleCollection: firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>[]</code> | rule block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.rule"></a>

```typescript
public readonly rule: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#rule FirewallPolicyRuleCollectionGroup#rule}

---

### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

const firewallPolicyRuleCollectionGroupApplicationRuleCollectionRule: firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#description FirewallPolicyRuleCollectionGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_addresses FirewallPolicyRuleCollectionGroup#destination_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationFqdns">destinationFqdns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_fqdns FirewallPolicyRuleCollectionGroup#destination_fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationFqdnTags">destinationFqdnTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_fqdn_tags FirewallPolicyRuleCollectionGroup#destination_fqdn_tags}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationUrls">destinationUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_urls FirewallPolicyRuleCollectionGroup#destination_urls}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.httpHeaders">httpHeaders</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>[]</code> | http_headers block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.protocols">protocols</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>[]</code> | protocols block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.sourceIpGroups">sourceIpGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.terminateTls">terminateTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#terminate_tls FirewallPolicyRuleCollectionGroup#terminate_tls}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.webCategories">webCategories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#web_categories FirewallPolicyRuleCollectionGroup#web_categories}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#description FirewallPolicyRuleCollectionGroup#description}.

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_addresses FirewallPolicyRuleCollectionGroup#destination_addresses}.

---

##### `destinationFqdns`<sup>Optional</sup> <a name="destinationFqdns" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationFqdns"></a>

```typescript
public readonly destinationFqdns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_fqdns FirewallPolicyRuleCollectionGroup#destination_fqdns}.

---

##### `destinationFqdnTags`<sup>Optional</sup> <a name="destinationFqdnTags" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationFqdnTags"></a>

```typescript
public readonly destinationFqdnTags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_fqdn_tags FirewallPolicyRuleCollectionGroup#destination_fqdn_tags}.

---

##### `destinationUrls`<sup>Optional</sup> <a name="destinationUrls" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationUrls"></a>

```typescript
public readonly destinationUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_urls FirewallPolicyRuleCollectionGroup#destination_urls}.

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>[]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#http_headers FirewallPolicyRuleCollectionGroup#http_headers}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.protocols"></a>

```typescript
public readonly protocols: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>[]

protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#protocols FirewallPolicyRuleCollectionGroup#protocols}

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}.

---

##### `sourceIpGroups`<sup>Optional</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.sourceIpGroups"></a>

```typescript
public readonly sourceIpGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}.

---

##### `terminateTls`<sup>Optional</sup> <a name="terminateTls" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.terminateTls"></a>

```typescript
public readonly terminateTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#terminate_tls FirewallPolicyRuleCollectionGroup#terminate_tls}.

---

##### `webCategories`<sup>Optional</sup> <a name="webCategories" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.webCategories"></a>

```typescript
public readonly webCategories: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#web_categories FirewallPolicyRuleCollectionGroup#web_categories}.

---

### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

const firewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders: firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#value FirewallPolicyRuleCollectionGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#value FirewallPolicyRuleCollectionGroup#value}.

---

### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

const firewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols: firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#port FirewallPolicyRuleCollectionGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#type FirewallPolicyRuleCollectionGroup#type}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#port FirewallPolicyRuleCollectionGroup#port}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#type FirewallPolicyRuleCollectionGroup#type}.

---

### FirewallPolicyRuleCollectionGroupConfig <a name="FirewallPolicyRuleCollectionGroupConfig" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

const firewallPolicyRuleCollectionGroupConfig: firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.firewallPolicyId">firewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#firewall_policy_id FirewallPolicyRuleCollectionGroup#firewall_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.applicationRuleCollection">applicationRuleCollection</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>[]</code> | application_rule_collection block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#id FirewallPolicyRuleCollectionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.natRuleCollection">natRuleCollection</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>[]</code> | nat_rule_collection block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.networkRuleCollection">networkRuleCollection</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>[]</code> | network_rule_collection block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `firewallPolicyId`<sup>Required</sup> <a name="firewallPolicyId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.firewallPolicyId"></a>

```typescript
public readonly firewallPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#firewall_policy_id FirewallPolicyRuleCollectionGroup#firewall_policy_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}.

---

##### `applicationRuleCollection`<sup>Optional</sup> <a name="applicationRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.applicationRuleCollection"></a>

```typescript
public readonly applicationRuleCollection: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>[]

application_rule_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#application_rule_collection FirewallPolicyRuleCollectionGroup#application_rule_collection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#id FirewallPolicyRuleCollectionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `natRuleCollection`<sup>Optional</sup> <a name="natRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.natRuleCollection"></a>

```typescript
public readonly natRuleCollection: IResolvable | FirewallPolicyRuleCollectionGroupNatRuleCollection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>[]

nat_rule_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#nat_rule_collection FirewallPolicyRuleCollectionGroup#nat_rule_collection}

---

##### `networkRuleCollection`<sup>Optional</sup> <a name="networkRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.networkRuleCollection"></a>

```typescript
public readonly networkRuleCollection: IResolvable | FirewallPolicyRuleCollectionGroupNetworkRuleCollection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>[]

network_rule_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#network_rule_collection FirewallPolicyRuleCollectionGroup#network_rule_collection}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirewallPolicyRuleCollectionGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#timeouts FirewallPolicyRuleCollectionGroup#timeouts}

---

### FirewallPolicyRuleCollectionGroupNatRuleCollection <a name="FirewallPolicyRuleCollectionGroupNatRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

const firewallPolicyRuleCollectionGroupNatRuleCollection: firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>[]</code> | rule block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.rule"></a>

```typescript
public readonly rule: IResolvable | FirewallPolicyRuleCollectionGroupNatRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#rule FirewallPolicyRuleCollectionGroup#rule}

---

### FirewallPolicyRuleCollectionGroupNatRuleCollectionRule <a name="FirewallPolicyRuleCollectionGroupNatRuleCollectionRule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

const firewallPolicyRuleCollectionGroupNatRuleCollectionRule: firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#protocols FirewallPolicyRuleCollectionGroup#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.translatedPort">translatedPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#translated_port FirewallPolicyRuleCollectionGroup#translated_port}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#description FirewallPolicyRuleCollectionGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.destinationAddress">destinationAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_address FirewallPolicyRuleCollectionGroup#destination_address}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_ports FirewallPolicyRuleCollectionGroup#destination_ports}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.sourceIpGroups">sourceIpGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.translatedAddress">translatedAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#translated_address FirewallPolicyRuleCollectionGroup#translated_address}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.translatedFqdn">translatedFqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#translated_fqdn FirewallPolicyRuleCollectionGroup#translated_fqdn}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#protocols FirewallPolicyRuleCollectionGroup#protocols}.

---

##### `translatedPort`<sup>Required</sup> <a name="translatedPort" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.translatedPort"></a>

```typescript
public readonly translatedPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#translated_port FirewallPolicyRuleCollectionGroup#translated_port}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#description FirewallPolicyRuleCollectionGroup#description}.

---

##### `destinationAddress`<sup>Optional</sup> <a name="destinationAddress" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_address FirewallPolicyRuleCollectionGroup#destination_address}.

---

##### `destinationPorts`<sup>Optional</sup> <a name="destinationPorts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_ports FirewallPolicyRuleCollectionGroup#destination_ports}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}.

---

##### `sourceIpGroups`<sup>Optional</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.sourceIpGroups"></a>

```typescript
public readonly sourceIpGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}.

---

##### `translatedAddress`<sup>Optional</sup> <a name="translatedAddress" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.translatedAddress"></a>

```typescript
public readonly translatedAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#translated_address FirewallPolicyRuleCollectionGroup#translated_address}.

---

##### `translatedFqdn`<sup>Optional</sup> <a name="translatedFqdn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.translatedFqdn"></a>

```typescript
public readonly translatedFqdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#translated_fqdn FirewallPolicyRuleCollectionGroup#translated_fqdn}.

---

### FirewallPolicyRuleCollectionGroupNetworkRuleCollection <a name="FirewallPolicyRuleCollectionGroupNetworkRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

const firewallPolicyRuleCollectionGroupNetworkRuleCollection: firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>[]</code> | rule block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.rule"></a>

```typescript
public readonly rule: IResolvable | FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#rule FirewallPolicyRuleCollectionGroup#rule}

---

### FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule <a name="FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

const firewallPolicyRuleCollectionGroupNetworkRuleCollectionRule: firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_ports FirewallPolicyRuleCollectionGroup#destination_ports}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#protocols FirewallPolicyRuleCollectionGroup#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#description FirewallPolicyRuleCollectionGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_addresses FirewallPolicyRuleCollectionGroup#destination_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationFqdns">destinationFqdns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_fqdns FirewallPolicyRuleCollectionGroup#destination_fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationIpGroups">destinationIpGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_ip_groups FirewallPolicyRuleCollectionGroup#destination_ip_groups}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.sourceIpGroups">sourceIpGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}. |

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_ports FirewallPolicyRuleCollectionGroup#destination_ports}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#protocols FirewallPolicyRuleCollectionGroup#protocols}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#description FirewallPolicyRuleCollectionGroup#description}.

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_addresses FirewallPolicyRuleCollectionGroup#destination_addresses}.

---

##### `destinationFqdns`<sup>Optional</sup> <a name="destinationFqdns" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationFqdns"></a>

```typescript
public readonly destinationFqdns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_fqdns FirewallPolicyRuleCollectionGroup#destination_fqdns}.

---

##### `destinationIpGroups`<sup>Optional</sup> <a name="destinationIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationIpGroups"></a>

```typescript
public readonly destinationIpGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#destination_ip_groups FirewallPolicyRuleCollectionGroup#destination_ip_groups}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}.

---

##### `sourceIpGroups`<sup>Optional</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.sourceIpGroups"></a>

```typescript
public readonly sourceIpGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}.

---

### FirewallPolicyRuleCollectionGroupTimeouts <a name="FirewallPolicyRuleCollectionGroupTimeouts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

const firewallPolicyRuleCollectionGroupTimeouts: firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#create FirewallPolicyRuleCollectionGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#delete FirewallPolicyRuleCollectionGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#read FirewallPolicyRuleCollectionGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#update FirewallPolicyRuleCollectionGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#create FirewallPolicyRuleCollectionGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#delete FirewallPolicyRuleCollectionGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#read FirewallPolicyRuleCollectionGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_policy_rule_collection_group#update FirewallPolicyRuleCollectionGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.get"></a>

```typescript
public get(index: number): FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>[]

---


### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.putRule">putRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.rule"></a>

```typescript
public readonly rule: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>

---


### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.get"></a>

```typescript
public get(index: number): FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>[]

---


### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>

---


### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.get"></a>

```typescript
public get(index: number): FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>[]

---


### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.putProtocols">putProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationFqdns">resetDestinationFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationFqdnTags">resetDestinationFqdnTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationUrls">resetDestinationUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetSourceIpGroups">resetSourceIpGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetTerminateTls">resetTerminateTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetWebCategories">resetWebCategories</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.putHttpHeaders"></a>

```typescript
public putHttpHeaders(value: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>[]

---

##### `putProtocols` <a name="putProtocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.putProtocols"></a>

```typescript
public putProtocols(value: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.putProtocols.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationAddresses"></a>

```typescript
public resetDestinationAddresses(): void
```

##### `resetDestinationFqdns` <a name="resetDestinationFqdns" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationFqdns"></a>

```typescript
public resetDestinationFqdns(): void
```

##### `resetDestinationFqdnTags` <a name="resetDestinationFqdnTags" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationFqdnTags"></a>

```typescript
public resetDestinationFqdnTags(): void
```

##### `resetDestinationUrls` <a name="resetDestinationUrls" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationUrls"></a>

```typescript
public resetDestinationUrls(): void
```

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetSourceAddresses"></a>

```typescript
public resetSourceAddresses(): void
```

##### `resetSourceIpGroups` <a name="resetSourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetSourceIpGroups"></a>

```typescript
public resetSourceIpGroups(): void
```

##### `resetTerminateTls` <a name="resetTerminateTls" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetTerminateTls"></a>

```typescript
public resetTerminateTls(): void
```

##### `resetWebCategories` <a name="resetWebCategories" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetWebCategories"></a>

```typescript
public resetWebCategories(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.protocols">protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdnsInput">destinationFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdnTagsInput">destinationFqdnTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationUrlsInput">destinationUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceIpGroupsInput">sourceIpGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.terminateTlsInput">terminateTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.webCategoriesInput">webCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdns">destinationFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdnTags">destinationFqdnTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationUrls">destinationUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceIpGroups">sourceIpGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.terminateTls">terminateTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.webCategories">webCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList</a>

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.protocols"></a>

```typescript
public readonly protocols: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationAddressesInput"></a>

```typescript
public readonly destinationAddressesInput: string[];
```

- *Type:* string[]

---

##### `destinationFqdnsInput`<sup>Optional</sup> <a name="destinationFqdnsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdnsInput"></a>

```typescript
public readonly destinationFqdnsInput: string[];
```

- *Type:* string[]

---

##### `destinationFqdnTagsInput`<sup>Optional</sup> <a name="destinationFqdnTagsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdnTagsInput"></a>

```typescript
public readonly destinationFqdnTagsInput: string[];
```

- *Type:* string[]

---

##### `destinationUrlsInput`<sup>Optional</sup> <a name="destinationUrlsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationUrlsInput"></a>

```typescript
public readonly destinationUrlsInput: string[];
```

- *Type:* string[]

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>[]

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceAddressesInput"></a>

```typescript
public readonly sourceAddressesInput: string[];
```

- *Type:* string[]

---

##### `sourceIpGroupsInput`<sup>Optional</sup> <a name="sourceIpGroupsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceIpGroupsInput"></a>

```typescript
public readonly sourceIpGroupsInput: string[];
```

- *Type:* string[]

---

##### `terminateTlsInput`<sup>Optional</sup> <a name="terminateTlsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.terminateTlsInput"></a>

```typescript
public readonly terminateTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webCategoriesInput`<sup>Optional</sup> <a name="webCategoriesInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.webCategoriesInput"></a>

```typescript
public readonly webCategoriesInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

---

##### `destinationFqdns`<sup>Required</sup> <a name="destinationFqdns" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdns"></a>

```typescript
public readonly destinationFqdns: string[];
```

- *Type:* string[]

---

##### `destinationFqdnTags`<sup>Required</sup> <a name="destinationFqdnTags" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdnTags"></a>

```typescript
public readonly destinationFqdnTags: string[];
```

- *Type:* string[]

---

##### `destinationUrls`<sup>Required</sup> <a name="destinationUrls" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationUrls"></a>

```typescript
public readonly destinationUrls: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourceIpGroups`<sup>Required</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceIpGroups"></a>

```typescript
public readonly sourceIpGroups: string[];
```

- *Type:* string[]

---

##### `terminateTls`<sup>Required</sup> <a name="terminateTls" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.terminateTls"></a>

```typescript
public readonly terminateTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webCategories`<sup>Required</sup> <a name="webCategories" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.webCategories"></a>

```typescript
public readonly webCategories: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>

---


### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.get"></a>

```typescript
public get(index: number): FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>[]

---


### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>

---


### FirewallPolicyRuleCollectionGroupNatRuleCollectionList <a name="FirewallPolicyRuleCollectionGroupNatRuleCollectionList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.get"></a>

```typescript
public get(index: number): FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupNatRuleCollection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>[]

---


### FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference <a name="FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.putRule">putRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | FirewallPolicyRuleCollectionGroupNatRuleCollectionRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList">FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.rule"></a>

```typescript
public readonly rule: FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList">FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | FirewallPolicyRuleCollectionGroupNatRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupNatRuleCollection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>

---


### FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList <a name="FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.get"></a>

```typescript
public get(index: number): FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupNatRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>[]

---


### FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference <a name="FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetDestinationAddress">resetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetDestinationPorts">resetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetSourceIpGroups">resetSourceIpGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetTranslatedAddress">resetTranslatedAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetTranslatedFqdn">resetTranslatedFqdn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationAddress` <a name="resetDestinationAddress" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetDestinationAddress"></a>

```typescript
public resetDestinationAddress(): void
```

##### `resetDestinationPorts` <a name="resetDestinationPorts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetDestinationPorts"></a>

```typescript
public resetDestinationPorts(): void
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetSourceAddresses"></a>

```typescript
public resetSourceAddresses(): void
```

##### `resetSourceIpGroups` <a name="resetSourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetSourceIpGroups"></a>

```typescript
public resetSourceIpGroups(): void
```

##### `resetTranslatedAddress` <a name="resetTranslatedAddress" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetTranslatedAddress"></a>

```typescript
public resetTranslatedAddress(): void
```

##### `resetTranslatedFqdn` <a name="resetTranslatedFqdn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetTranslatedFqdn"></a>

```typescript
public resetTranslatedFqdn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationAddressInput">destinationAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceIpGroupsInput">sourceIpGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedAddressInput">translatedAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedFqdnInput">translatedFqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedPortInput">translatedPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceIpGroups">sourceIpGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedAddress">translatedAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedFqdn">translatedFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedPort">translatedPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationAddressInput`<sup>Optional</sup> <a name="destinationAddressInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationAddressInput"></a>

```typescript
public readonly destinationAddressInput: string;
```

- *Type:* string

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationPortsInput"></a>

```typescript
public readonly destinationPortsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceAddressesInput"></a>

```typescript
public readonly sourceAddressesInput: string[];
```

- *Type:* string[]

---

##### `sourceIpGroupsInput`<sup>Optional</sup> <a name="sourceIpGroupsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceIpGroupsInput"></a>

```typescript
public readonly sourceIpGroupsInput: string[];
```

- *Type:* string[]

---

##### `translatedAddressInput`<sup>Optional</sup> <a name="translatedAddressInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedAddressInput"></a>

```typescript
public readonly translatedAddressInput: string;
```

- *Type:* string

---

##### `translatedFqdnInput`<sup>Optional</sup> <a name="translatedFqdnInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedFqdnInput"></a>

```typescript
public readonly translatedFqdnInput: string;
```

- *Type:* string

---

##### `translatedPortInput`<sup>Optional</sup> <a name="translatedPortInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedPortInput"></a>

```typescript
public readonly translatedPortInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string;
```

- *Type:* string

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourceIpGroups`<sup>Required</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceIpGroups"></a>

```typescript
public readonly sourceIpGroups: string[];
```

- *Type:* string[]

---

##### `translatedAddress`<sup>Required</sup> <a name="translatedAddress" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedAddress"></a>

```typescript
public readonly translatedAddress: string;
```

- *Type:* string

---

##### `translatedFqdn`<sup>Required</sup> <a name="translatedFqdn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedFqdn"></a>

```typescript
public readonly translatedFqdn: string;
```

- *Type:* string

---

##### `translatedPort`<sup>Required</sup> <a name="translatedPort" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedPort"></a>

```typescript
public readonly translatedPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupNatRuleCollectionRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>

---


### FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList <a name="FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.get"></a>

```typescript
public get(index: number): FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupNetworkRuleCollection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>[]

---


### FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference <a name="FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.putRule">putRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.rule"></a>

```typescript
public readonly rule: FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupNetworkRuleCollection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>

---


### FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList <a name="FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.get"></a>

```typescript
public get(index: number): FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>[]

---


### FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference <a name="FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDestinationFqdns">resetDestinationFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDestinationIpGroups">resetDestinationIpGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetSourceIpGroups">resetSourceIpGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDestinationAddresses"></a>

```typescript
public resetDestinationAddresses(): void
```

##### `resetDestinationFqdns` <a name="resetDestinationFqdns" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDestinationFqdns"></a>

```typescript
public resetDestinationFqdns(): void
```

##### `resetDestinationIpGroups` <a name="resetDestinationIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDestinationIpGroups"></a>

```typescript
public resetDestinationIpGroups(): void
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetSourceAddresses"></a>

```typescript
public resetSourceAddresses(): void
```

##### `resetSourceIpGroups` <a name="resetSourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetSourceIpGroups"></a>

```typescript
public resetSourceIpGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationFqdnsInput">destinationFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationIpGroupsInput">destinationIpGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceIpGroupsInput">sourceIpGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationFqdns">destinationFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationIpGroups">destinationIpGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceIpGroups">sourceIpGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationAddressesInput"></a>

```typescript
public readonly destinationAddressesInput: string[];
```

- *Type:* string[]

---

##### `destinationFqdnsInput`<sup>Optional</sup> <a name="destinationFqdnsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationFqdnsInput"></a>

```typescript
public readonly destinationFqdnsInput: string[];
```

- *Type:* string[]

---

##### `destinationIpGroupsInput`<sup>Optional</sup> <a name="destinationIpGroupsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationIpGroupsInput"></a>

```typescript
public readonly destinationIpGroupsInput: string[];
```

- *Type:* string[]

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationPortsInput"></a>

```typescript
public readonly destinationPortsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceAddressesInput"></a>

```typescript
public readonly sourceAddressesInput: string[];
```

- *Type:* string[]

---

##### `sourceIpGroupsInput`<sup>Optional</sup> <a name="sourceIpGroupsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceIpGroupsInput"></a>

```typescript
public readonly sourceIpGroupsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

---

##### `destinationFqdns`<sup>Required</sup> <a name="destinationFqdns" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationFqdns"></a>

```typescript
public readonly destinationFqdns: string[];
```

- *Type:* string[]

---

##### `destinationIpGroups`<sup>Required</sup> <a name="destinationIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationIpGroups"></a>

```typescript
public readonly destinationIpGroups: string[];
```

- *Type:* string[]

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourceIpGroups`<sup>Required</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceIpGroups"></a>

```typescript
public readonly sourceIpGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>

---


### FirewallPolicyRuleCollectionGroupTimeoutsOutputReference <a name="FirewallPolicyRuleCollectionGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { firewallPolicyRuleCollectionGroup } from '@cdktf/provider-azurerm'

new firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallPolicyRuleCollectionGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a>

---



