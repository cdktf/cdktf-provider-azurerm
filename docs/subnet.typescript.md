# `azurerm_subnet`

Refer to the Terraform Registory for docs: [`azurerm_subnet`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet).

# `subnet` Submodule <a name="`subnet` Submodule" id="@cdktf/provider-azurerm.subnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Subnet <a name="Subnet" id="@cdktf/provider-azurerm.subnet.Subnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet azurerm_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnet.Subnet.Initializer"></a>

```typescript
import { subnet } from '@cdktf/provider-azurerm'

new subnet.Subnet(scope: Construct, id: string, config: SubnetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig">SubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subnet.Subnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnet.Subnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.subnet.Subnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetConfig">SubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.putDelegation">putDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetDelegation">resetDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetEnforcePrivateLinkEndpointNetworkPolicies">resetEnforcePrivateLinkEndpointNetworkPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetEnforcePrivateLinkServiceNetworkPolicies">resetEnforcePrivateLinkServiceNetworkPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetPrivateEndpointNetworkPoliciesEnabled">resetPrivateEndpointNetworkPoliciesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetPrivateLinkServiceNetworkPoliciesEnabled">resetPrivateLinkServiceNetworkPoliciesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetServiceEndpointPolicyIds">resetServiceEndpointPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetServiceEndpoints">resetServiceEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subnet.Subnet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.subnet.Subnet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subnet.Subnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnet.Subnet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.subnet.Subnet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.subnet.Subnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.subnet.Subnet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.subnet.Subnet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.subnet.Subnet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.subnet.Subnet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subnet.Subnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.subnet.Subnet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnet.Subnet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnet.Subnet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.subnet.Subnet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subnet.Subnet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.subnet.Subnet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putDelegation` <a name="putDelegation" id="@cdktf/provider-azurerm.subnet.Subnet.putDelegation"></a>

```typescript
public putDelegation(value: IResolvable | SubnetDelegation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnet.Subnet.putDelegation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.subnet.Subnet.putTimeouts"></a>

```typescript
public putTimeouts(value: SubnetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnet.Subnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a>

---

##### `resetDelegation` <a name="resetDelegation" id="@cdktf/provider-azurerm.subnet.Subnet.resetDelegation"></a>

```typescript
public resetDelegation(): void
```

##### `resetEnforcePrivateLinkEndpointNetworkPolicies` <a name="resetEnforcePrivateLinkEndpointNetworkPolicies" id="@cdktf/provider-azurerm.subnet.Subnet.resetEnforcePrivateLinkEndpointNetworkPolicies"></a>

```typescript
public resetEnforcePrivateLinkEndpointNetworkPolicies(): void
```

##### `resetEnforcePrivateLinkServiceNetworkPolicies` <a name="resetEnforcePrivateLinkServiceNetworkPolicies" id="@cdktf/provider-azurerm.subnet.Subnet.resetEnforcePrivateLinkServiceNetworkPolicies"></a>

```typescript
public resetEnforcePrivateLinkServiceNetworkPolicies(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.subnet.Subnet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrivateEndpointNetworkPoliciesEnabled` <a name="resetPrivateEndpointNetworkPoliciesEnabled" id="@cdktf/provider-azurerm.subnet.Subnet.resetPrivateEndpointNetworkPoliciesEnabled"></a>

```typescript
public resetPrivateEndpointNetworkPoliciesEnabled(): void
```

##### `resetPrivateLinkServiceNetworkPoliciesEnabled` <a name="resetPrivateLinkServiceNetworkPoliciesEnabled" id="@cdktf/provider-azurerm.subnet.Subnet.resetPrivateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public resetPrivateLinkServiceNetworkPoliciesEnabled(): void
```

##### `resetServiceEndpointPolicyIds` <a name="resetServiceEndpointPolicyIds" id="@cdktf/provider-azurerm.subnet.Subnet.resetServiceEndpointPolicyIds"></a>

```typescript
public resetServiceEndpointPolicyIds(): void
```

##### `resetServiceEndpoints` <a name="resetServiceEndpoints" id="@cdktf/provider-azurerm.subnet.Subnet.resetServiceEndpoints"></a>

```typescript
public resetServiceEndpoints(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.subnet.Subnet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.subnet.Subnet.isConstruct"></a>

```typescript
import { subnet } from '@cdktf/provider-azurerm'

subnet.Subnet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnet.Subnet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.subnet.Subnet.isTerraformElement"></a>

```typescript
import { subnet } from '@cdktf/provider-azurerm'

subnet.Subnet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnet.Subnet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.subnet.Subnet.isTerraformResource"></a>

```typescript
import { subnet } from '@cdktf/provider-azurerm'

subnet.Subnet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnet.Subnet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.subnet.Subnet.generateConfigForImport"></a>

```typescript
import { subnet } from '@cdktf/provider-azurerm'

subnet.Subnet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subnet.Subnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.subnet.Subnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Subnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.subnet.Subnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Subnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnet.Subnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Subnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.delegation">delegation</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList">SubnetDelegationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference">SubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.addressPrefixesInput">addressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.delegationInput">delegationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkEndpointNetworkPoliciesInput">enforcePrivateLinkEndpointNetworkPoliciesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkServiceNetworkPoliciesInput">enforcePrivateLinkServiceNetworkPoliciesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPoliciesEnabledInput">privateEndpointNetworkPoliciesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.privateLinkServiceNetworkPoliciesEnabledInput">privateLinkServiceNetworkPoliciesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpointPolicyIdsInput">serviceEndpointPolicyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpointsInput">serviceEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.virtualNetworkNameInput">virtualNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.addressPrefixes">addressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkEndpointNetworkPolicies">enforcePrivateLinkEndpointNetworkPolicies</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkServiceNetworkPolicies">enforcePrivateLinkServiceNetworkPolicies</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPoliciesEnabled">privateEndpointNetworkPoliciesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.privateLinkServiceNetworkPoliciesEnabled">privateLinkServiceNetworkPoliciesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpointPolicyIds">serviceEndpointPolicyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpoints">serviceEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.virtualNetworkName">virtualNetworkName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.subnet.Subnet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.subnet.Subnet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnet.Subnet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.subnet.Subnet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.subnet.Subnet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.subnet.Subnet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.subnet.Subnet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subnet.Subnet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subnet.Subnet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subnet.Subnet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subnet.Subnet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subnet.Subnet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnet.Subnet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subnet.Subnet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `delegation`<sup>Required</sup> <a name="delegation" id="@cdktf/provider-azurerm.subnet.Subnet.property.delegation"></a>

```typescript
public readonly delegation: SubnetDelegationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList">SubnetDelegationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subnet.Subnet.property.timeouts"></a>

```typescript
public readonly timeouts: SubnetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference">SubnetTimeoutsOutputReference</a>

---

##### `addressPrefixesInput`<sup>Optional</sup> <a name="addressPrefixesInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.addressPrefixesInput"></a>

```typescript
public readonly addressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `delegationInput`<sup>Optional</sup> <a name="delegationInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.delegationInput"></a>

```typescript
public readonly delegationInput: IResolvable | SubnetDelegation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>[]

---

##### `enforcePrivateLinkEndpointNetworkPoliciesInput`<sup>Optional</sup> <a name="enforcePrivateLinkEndpointNetworkPoliciesInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkEndpointNetworkPoliciesInput"></a>

```typescript
public readonly enforcePrivateLinkEndpointNetworkPoliciesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforcePrivateLinkServiceNetworkPoliciesInput`<sup>Optional</sup> <a name="enforcePrivateLinkServiceNetworkPoliciesInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkServiceNetworkPoliciesInput"></a>

```typescript
public readonly enforcePrivateLinkServiceNetworkPoliciesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateEndpointNetworkPoliciesEnabledInput`<sup>Optional</sup> <a name="privateEndpointNetworkPoliciesEnabledInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPoliciesEnabledInput"></a>

```typescript
public readonly privateEndpointNetworkPoliciesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateLinkServiceNetworkPoliciesEnabledInput`<sup>Optional</sup> <a name="privateLinkServiceNetworkPoliciesEnabledInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.privateLinkServiceNetworkPoliciesEnabledInput"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serviceEndpointPolicyIdsInput`<sup>Optional</sup> <a name="serviceEndpointPolicyIdsInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpointPolicyIdsInput"></a>

```typescript
public readonly serviceEndpointPolicyIdsInput: string[];
```

- *Type:* string[]

---

##### `serviceEndpointsInput`<sup>Optional</sup> <a name="serviceEndpointsInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpointsInput"></a>

```typescript
public readonly serviceEndpointsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SubnetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a>

---

##### `virtualNetworkNameInput`<sup>Optional</sup> <a name="virtualNetworkNameInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.virtualNetworkNameInput"></a>

```typescript
public readonly virtualNetworkNameInput: string;
```

- *Type:* string

---

##### `addressPrefixes`<sup>Required</sup> <a name="addressPrefixes" id="@cdktf/provider-azurerm.subnet.Subnet.property.addressPrefixes"></a>

```typescript
public readonly addressPrefixes: string[];
```

- *Type:* string[]

---

##### `enforcePrivateLinkEndpointNetworkPolicies`<sup>Required</sup> <a name="enforcePrivateLinkEndpointNetworkPolicies" id="@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkEndpointNetworkPolicies"></a>

```typescript
public readonly enforcePrivateLinkEndpointNetworkPolicies: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforcePrivateLinkServiceNetworkPolicies`<sup>Required</sup> <a name="enforcePrivateLinkServiceNetworkPolicies" id="@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkServiceNetworkPolicies"></a>

```typescript
public readonly enforcePrivateLinkServiceNetworkPolicies: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnet.Subnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnet.Subnet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateEndpointNetworkPoliciesEnabled`<sup>Required</sup> <a name="privateEndpointNetworkPoliciesEnabled" id="@cdktf/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPoliciesEnabled"></a>

```typescript
public readonly privateEndpointNetworkPoliciesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateLinkServiceNetworkPoliciesEnabled`<sup>Required</sup> <a name="privateLinkServiceNetworkPoliciesEnabled" id="@cdktf/provider-azurerm.subnet.Subnet.property.privateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.subnet.Subnet.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serviceEndpointPolicyIds`<sup>Required</sup> <a name="serviceEndpointPolicyIds" id="@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpointPolicyIds"></a>

```typescript
public readonly serviceEndpointPolicyIds: string[];
```

- *Type:* string[]

---

##### `serviceEndpoints`<sup>Required</sup> <a name="serviceEndpoints" id="@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpoints"></a>

```typescript
public readonly serviceEndpoints: string[];
```

- *Type:* string[]

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@cdktf/provider-azurerm.subnet.Subnet.property.virtualNetworkName"></a>

```typescript
public readonly virtualNetworkName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.subnet.Subnet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SubnetConfig <a name="SubnetConfig" id="@cdktf/provider-azurerm.subnet.SubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnet.SubnetConfig.Initializer"></a>

```typescript
import { subnet } from '@cdktf/provider-azurerm'

const subnetConfig: subnet.SubnetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.addressPrefixes">addressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#name Subnet#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.virtualNetworkName">virtualNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.delegation">delegation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>[]</code> | delegation block. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.enforcePrivateLinkEndpointNetworkPolicies">enforcePrivateLinkEndpointNetworkPolicies</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#enforce_private_link_endpoint_network_policies Subnet#enforce_private_link_endpoint_network_policies}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.enforcePrivateLinkServiceNetworkPolicies">enforcePrivateLinkServiceNetworkPolicies</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#enforce_private_link_service_network_policies Subnet#enforce_private_link_service_network_policies}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#id Subnet#id}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.privateEndpointNetworkPoliciesEnabled">privateEndpointNetworkPoliciesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#private_endpoint_network_policies_enabled Subnet#private_endpoint_network_policies_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.privateLinkServiceNetworkPoliciesEnabled">privateLinkServiceNetworkPoliciesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.serviceEndpointPolicyIds">serviceEndpointPolicyIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.serviceEndpoints">serviceEndpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#service_endpoints Subnet#service_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addressPrefixes`<sup>Required</sup> <a name="addressPrefixes" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.addressPrefixes"></a>

```typescript
public readonly addressPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#name Subnet#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}.

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.virtualNetworkName"></a>

```typescript
public readonly virtualNetworkName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}.

---

##### `delegation`<sup>Optional</sup> <a name="delegation" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.delegation"></a>

```typescript
public readonly delegation: IResolvable | SubnetDelegation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>[]

delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#delegation Subnet#delegation}

---

##### `enforcePrivateLinkEndpointNetworkPolicies`<sup>Optional</sup> <a name="enforcePrivateLinkEndpointNetworkPolicies" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.enforcePrivateLinkEndpointNetworkPolicies"></a>

```typescript
public readonly enforcePrivateLinkEndpointNetworkPolicies: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#enforce_private_link_endpoint_network_policies Subnet#enforce_private_link_endpoint_network_policies}.

---

##### `enforcePrivateLinkServiceNetworkPolicies`<sup>Optional</sup> <a name="enforcePrivateLinkServiceNetworkPolicies" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.enforcePrivateLinkServiceNetworkPolicies"></a>

```typescript
public readonly enforcePrivateLinkServiceNetworkPolicies: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#enforce_private_link_service_network_policies Subnet#enforce_private_link_service_network_policies}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateEndpointNetworkPoliciesEnabled`<sup>Optional</sup> <a name="privateEndpointNetworkPoliciesEnabled" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.privateEndpointNetworkPoliciesEnabled"></a>

```typescript
public readonly privateEndpointNetworkPoliciesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#private_endpoint_network_policies_enabled Subnet#private_endpoint_network_policies_enabled}.

---

##### `privateLinkServiceNetworkPoliciesEnabled`<sup>Optional</sup> <a name="privateLinkServiceNetworkPoliciesEnabled" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.privateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}.

---

##### `serviceEndpointPolicyIds`<sup>Optional</sup> <a name="serviceEndpointPolicyIds" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.serviceEndpointPolicyIds"></a>

```typescript
public readonly serviceEndpointPolicyIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}.

---

##### `serviceEndpoints`<sup>Optional</sup> <a name="serviceEndpoints" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.serviceEndpoints"></a>

```typescript
public readonly serviceEndpoints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#service_endpoints Subnet#service_endpoints}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SubnetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#timeouts Subnet#timeouts}

---

### SubnetDelegation <a name="SubnetDelegation" id="@cdktf/provider-azurerm.subnet.SubnetDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnet.SubnetDelegation.Initializer"></a>

```typescript
import { subnet } from '@cdktf/provider-azurerm'

const subnetDelegation: subnet.SubnetDelegation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegation.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#name Subnet#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegation.property.serviceDelegation">serviceDelegation</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a></code> | service_delegation block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnet.SubnetDelegation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#name Subnet#name}.

---

##### `serviceDelegation`<sup>Required</sup> <a name="serviceDelegation" id="@cdktf/provider-azurerm.subnet.SubnetDelegation.property.serviceDelegation"></a>

```typescript
public readonly serviceDelegation: SubnetDelegationServiceDelegation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a>

service_delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#service_delegation Subnet#service_delegation}

---

### SubnetDelegationServiceDelegation <a name="SubnetDelegationServiceDelegation" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation.Initializer"></a>

```typescript
import { subnet } from '@cdktf/provider-azurerm'

const subnetDelegationServiceDelegation: subnet.SubnetDelegationServiceDelegation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#name Subnet#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation.property.actions">actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#actions Subnet#actions}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#name Subnet#name}.

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#actions Subnet#actions}.

---

### SubnetTimeouts <a name="SubnetTimeouts" id="@cdktf/provider-azurerm.subnet.SubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnet.SubnetTimeouts.Initializer"></a>

```typescript
import { subnet } from '@cdktf/provider-azurerm'

const subnetTimeouts: subnet.SubnetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#create Subnet#create}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#delete Subnet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#read Subnet#read}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#update Subnet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#create Subnet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#delete Subnet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#read Subnet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/subnet#update Subnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubnetDelegationList <a name="SubnetDelegationList" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.Initializer"></a>

```typescript
import { subnet } from '@cdktf/provider-azurerm'

new subnet.SubnetDelegationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.get"></a>

```typescript
public get(index: number): SubnetDelegationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SubnetDelegation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>[]

---


### SubnetDelegationOutputReference <a name="SubnetDelegationOutputReference" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer"></a>

```typescript
import { subnet } from '@cdktf/provider-azurerm'

new subnet.SubnetDelegationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.putServiceDelegation">putServiceDelegation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceDelegation` <a name="putServiceDelegation" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.putServiceDelegation"></a>

```typescript
public putServiceDelegation(value: SubnetDelegationServiceDelegation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.putServiceDelegation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.serviceDelegation">serviceDelegation</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference">SubnetDelegationServiceDelegationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.serviceDelegationInput">serviceDelegationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceDelegation`<sup>Required</sup> <a name="serviceDelegation" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.serviceDelegation"></a>

```typescript
public readonly serviceDelegation: SubnetDelegationServiceDelegationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference">SubnetDelegationServiceDelegationOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceDelegationInput`<sup>Optional</sup> <a name="serviceDelegationInput" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.serviceDelegationInput"></a>

```typescript
public readonly serviceDelegationInput: SubnetDelegationServiceDelegation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SubnetDelegation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>

---


### SubnetDelegationServiceDelegationOutputReference <a name="SubnetDelegationServiceDelegationOutputReference" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer"></a>

```typescript
import { subnet } from '@cdktf/provider-azurerm'

new subnet.SubnetDelegationServiceDelegationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resetActions">resetActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SubnetDelegationServiceDelegation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a>

---


### SubnetTimeoutsOutputReference <a name="SubnetTimeoutsOutputReference" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer"></a>

```typescript
import { subnet } from '@cdktf/provider-azurerm'

new subnet.SubnetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SubnetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a>

---



