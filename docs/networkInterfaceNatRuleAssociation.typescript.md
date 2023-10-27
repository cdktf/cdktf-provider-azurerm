# `azurerm_network_interface_nat_rule_association`

Refer to the Terraform Registory for docs: [`azurerm_network_interface_nat_rule_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association).

# `networkInterfaceNatRuleAssociation` Submodule <a name="`networkInterfaceNatRuleAssociation` Submodule" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterfaceNatRuleAssociation <a name="NetworkInterfaceNatRuleAssociation" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association azurerm_network_interface_nat_rule_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer"></a>

```typescript
import { networkInterfaceNatRuleAssociation } from '@cdktf/provider-azurerm'

new networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation(scope: Construct, id: string, config: NetworkInterfaceNatRuleAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig">NetworkInterfaceNatRuleAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig">NetworkInterfaceNatRuleAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkInterfaceNatRuleAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkInterfaceNatRuleAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isConstruct"></a>

```typescript
import { networkInterfaceNatRuleAssociation } from '@cdktf/provider-azurerm'

networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isTerraformElement"></a>

```typescript
import { networkInterfaceNatRuleAssociation } from '@cdktf/provider-azurerm'

networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isTerraformResource"></a>

```typescript
import { networkInterfaceNatRuleAssociation } from '@cdktf/provider-azurerm'

networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.generateConfigForImport"></a>

```typescript
import { networkInterfaceNatRuleAssociation } from '@cdktf/provider-azurerm'

networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkInterfaceNatRuleAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkInterfaceNatRuleAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkInterfaceNatRuleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkInterfaceNatRuleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference">NetworkInterfaceNatRuleAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.ipConfigurationNameInput">ipConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.natRuleIdInput">natRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.ipConfigurationName">ipConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.natRuleId">natRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkInterfaceNatRuleAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference">NetworkInterfaceNatRuleAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipConfigurationNameInput`<sup>Optional</sup> <a name="ipConfigurationNameInput" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.ipConfigurationNameInput"></a>

```typescript
public readonly ipConfigurationNameInput: string;
```

- *Type:* string

---

##### `natRuleIdInput`<sup>Optional</sup> <a name="natRuleIdInput" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.natRuleIdInput"></a>

```typescript
public readonly natRuleIdInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkInterfaceNatRuleAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipConfigurationName`<sup>Required</sup> <a name="ipConfigurationName" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.ipConfigurationName"></a>

```typescript
public readonly ipConfigurationName: string;
```

- *Type:* string

---

##### `natRuleId`<sup>Required</sup> <a name="natRuleId" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.natRuleId"></a>

```typescript
public readonly natRuleId: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceNatRuleAssociationConfig <a name="NetworkInterfaceNatRuleAssociationConfig" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.Initializer"></a>

```typescript
import { networkInterfaceNatRuleAssociation } from '@cdktf/provider-azurerm'

const networkInterfaceNatRuleAssociationConfig: networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.ipConfigurationName">ipConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#ip_configuration_name NetworkInterfaceNatRuleAssociation#ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.natRuleId">natRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#nat_rule_id NetworkInterfaceNatRuleAssociation#nat_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#network_interface_id NetworkInterfaceNatRuleAssociation#network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#id NetworkInterfaceNatRuleAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipConfigurationName`<sup>Required</sup> <a name="ipConfigurationName" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.ipConfigurationName"></a>

```typescript
public readonly ipConfigurationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#ip_configuration_name NetworkInterfaceNatRuleAssociation#ip_configuration_name}.

---

##### `natRuleId`<sup>Required</sup> <a name="natRuleId" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.natRuleId"></a>

```typescript
public readonly natRuleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#nat_rule_id NetworkInterfaceNatRuleAssociation#nat_rule_id}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#network_interface_id NetworkInterfaceNatRuleAssociation#network_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#id NetworkInterfaceNatRuleAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkInterfaceNatRuleAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#timeouts NetworkInterfaceNatRuleAssociation#timeouts}

---

### NetworkInterfaceNatRuleAssociationTimeouts <a name="NetworkInterfaceNatRuleAssociationTimeouts" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.Initializer"></a>

```typescript
import { networkInterfaceNatRuleAssociation } from '@cdktf/provider-azurerm'

const networkInterfaceNatRuleAssociationTimeouts: networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#create NetworkInterfaceNatRuleAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#delete NetworkInterfaceNatRuleAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#read NetworkInterfaceNatRuleAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#update NetworkInterfaceNatRuleAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#create NetworkInterfaceNatRuleAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#delete NetworkInterfaceNatRuleAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#read NetworkInterfaceNatRuleAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_nat_rule_association#update NetworkInterfaceNatRuleAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceNatRuleAssociationTimeoutsOutputReference <a name="NetworkInterfaceNatRuleAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkInterfaceNatRuleAssociation } from '@cdktf/provider-azurerm'

new networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkInterfaceNatRuleAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a>

---



