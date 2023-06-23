# `azurerm_policy_virtual_machine_configuration_assignment`

Refer to the Terraform Registory for docs: [`azurerm_policy_virtual_machine_configuration_assignment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment).

# `policyVirtualMachineConfigurationAssignment` Submodule <a name="`policyVirtualMachineConfigurationAssignment` Submodule" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyVirtualMachineConfigurationAssignment <a name="PolicyVirtualMachineConfigurationAssignment" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment azurerm_policy_virtual_machine_configuration_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer"></a>

```typescript
import { policyVirtualMachineConfigurationAssignment } from '@cdktf/provider-azurerm'

new policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment(scope: Construct, id: string, config: PolicyVirtualMachineConfigurationAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig">PolicyVirtualMachineConfigurationAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig">PolicyVirtualMachineConfigurationAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putConfiguration"></a>

```typescript
public putConfiguration(value: PolicyVirtualMachineConfigurationAssignmentConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: PolicyVirtualMachineConfigurationAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isConstruct"></a>

```typescript
import { policyVirtualMachineConfigurationAssignment } from '@cdktf/provider-azurerm'

policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformElement"></a>

```typescript
import { policyVirtualMachineConfigurationAssignment } from '@cdktf/provider-azurerm'

policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformResource"></a>

```typescript
import { policyVirtualMachineConfigurationAssignment } from '@cdktf/provider-azurerm'

policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference">PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference">PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.configurationInput">configurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.configuration"></a>

```typescript
public readonly configuration: PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference">PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference">PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.configurationInput"></a>

```typescript
public readonly configurationInput: PolicyVirtualMachineConfigurationAssignmentConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PolicyVirtualMachineConfigurationAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a>

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.virtualMachineIdInput"></a>

```typescript
public readonly virtualMachineIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyVirtualMachineConfigurationAssignmentConfig <a name="PolicyVirtualMachineConfigurationAssignmentConfig" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.Initializer"></a>

```typescript
import { policyVirtualMachineConfigurationAssignment } from '@cdktf/provider-azurerm'

const policyVirtualMachineConfigurationAssignmentConfig: policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#location PolicyVirtualMachineConfigurationAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#name PolicyVirtualMachineConfigurationAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#virtual_machine_id PolicyVirtualMachineConfigurationAssignment#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#id PolicyVirtualMachineConfigurationAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.configuration"></a>

```typescript
public readonly configuration: PolicyVirtualMachineConfigurationAssignmentConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#configuration PolicyVirtualMachineConfigurationAssignment#configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#location PolicyVirtualMachineConfigurationAssignment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#name PolicyVirtualMachineConfigurationAssignment#name}.

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#virtual_machine_id PolicyVirtualMachineConfigurationAssignment#virtual_machine_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#id PolicyVirtualMachineConfigurationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PolicyVirtualMachineConfigurationAssignmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#timeouts PolicyVirtualMachineConfigurationAssignment#timeouts}

---

### PolicyVirtualMachineConfigurationAssignmentConfiguration <a name="PolicyVirtualMachineConfigurationAssignmentConfiguration" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.Initializer"></a>

```typescript
import { policyVirtualMachineConfigurationAssignment } from '@cdktf/provider-azurerm'

const policyVirtualMachineConfigurationAssignmentConfiguration: policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.assignmentType">assignmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#assignment_type PolicyVirtualMachineConfigurationAssignment#assignment_type}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.contentHash">contentHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#content_hash PolicyVirtualMachineConfigurationAssignment#content_hash}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.contentUri">contentUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#content_uri PolicyVirtualMachineConfigurationAssignment#content_uri}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#version PolicyVirtualMachineConfigurationAssignment#version}. |

---

##### `assignmentType`<sup>Optional</sup> <a name="assignmentType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.assignmentType"></a>

```typescript
public readonly assignmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#assignment_type PolicyVirtualMachineConfigurationAssignment#assignment_type}.

---

##### `contentHash`<sup>Optional</sup> <a name="contentHash" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.contentHash"></a>

```typescript
public readonly contentHash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#content_hash PolicyVirtualMachineConfigurationAssignment#content_hash}.

---

##### `contentUri`<sup>Optional</sup> <a name="contentUri" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.contentUri"></a>

```typescript
public readonly contentUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#content_uri PolicyVirtualMachineConfigurationAssignment#content_uri}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | PolicyVirtualMachineConfigurationAssignmentConfigurationParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#parameter PolicyVirtualMachineConfigurationAssignment#parameter}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#version PolicyVirtualMachineConfigurationAssignment#version}.

---

### PolicyVirtualMachineConfigurationAssignmentConfigurationParameter <a name="PolicyVirtualMachineConfigurationAssignmentConfigurationParameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.Initializer"></a>

```typescript
import { policyVirtualMachineConfigurationAssignment } from '@cdktf/provider-azurerm'

const policyVirtualMachineConfigurationAssignmentConfigurationParameter: policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#name PolicyVirtualMachineConfigurationAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#value PolicyVirtualMachineConfigurationAssignment#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#name PolicyVirtualMachineConfigurationAssignment#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#value PolicyVirtualMachineConfigurationAssignment#value}.

---

### PolicyVirtualMachineConfigurationAssignmentTimeouts <a name="PolicyVirtualMachineConfigurationAssignmentTimeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.Initializer"></a>

```typescript
import { policyVirtualMachineConfigurationAssignment } from '@cdktf/provider-azurerm'

const policyVirtualMachineConfigurationAssignmentTimeouts: policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#create PolicyVirtualMachineConfigurationAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#delete PolicyVirtualMachineConfigurationAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#read PolicyVirtualMachineConfigurationAssignment#read}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#update PolicyVirtualMachineConfigurationAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#create PolicyVirtualMachineConfigurationAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#delete PolicyVirtualMachineConfigurationAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#read PolicyVirtualMachineConfigurationAssignment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_virtual_machine_configuration_assignment#update PolicyVirtualMachineConfigurationAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference <a name="PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer"></a>

```typescript
import { policyVirtualMachineConfigurationAssignment } from '@cdktf/provider-azurerm'

new policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetAssignmentType">resetAssignmentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetContentHash">resetContentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetContentUri">resetContentUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameter` <a name="putParameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.putParameter"></a>

```typescript
public putParameter(value: IResolvable | PolicyVirtualMachineConfigurationAssignmentConfigurationParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>[]

---

##### `resetAssignmentType` <a name="resetAssignmentType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetAssignmentType"></a>

```typescript
public resetAssignmentType(): void
```

##### `resetContentHash` <a name="resetContentHash" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetContentHash"></a>

```typescript
public resetContentHash(): void
```

##### `resetContentUri` <a name="resetContentUri" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetContentUri"></a>

```typescript
public resetContentUri(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList">PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.assignmentTypeInput">assignmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentHashInput">contentHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentUriInput">contentUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.assignmentType">assignmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentHash">contentHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentUri">contentUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.parameter"></a>

```typescript
public readonly parameter: PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList">PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList</a>

---

##### `assignmentTypeInput`<sup>Optional</sup> <a name="assignmentTypeInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.assignmentTypeInput"></a>

```typescript
public readonly assignmentTypeInput: string;
```

- *Type:* string

---

##### `contentHashInput`<sup>Optional</sup> <a name="contentHashInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentHashInput"></a>

```typescript
public readonly contentHashInput: string;
```

- *Type:* string

---

##### `contentUriInput`<sup>Optional</sup> <a name="contentUriInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentUriInput"></a>

```typescript
public readonly contentUriInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | PolicyVirtualMachineConfigurationAssignmentConfigurationParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>[]

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `assignmentType`<sup>Required</sup> <a name="assignmentType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.assignmentType"></a>

```typescript
public readonly assignmentType: string;
```

- *Type:* string

---

##### `contentHash`<sup>Required</sup> <a name="contentHash" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentHash"></a>

```typescript
public readonly contentHash: string;
```

- *Type:* string

---

##### `contentUri`<sup>Required</sup> <a name="contentUri" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentUri"></a>

```typescript
public readonly contentUri: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PolicyVirtualMachineConfigurationAssignmentConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a>

---


### PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList <a name="PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer"></a>

```typescript
import { policyVirtualMachineConfigurationAssignment } from '@cdktf/provider-azurerm'

new policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.get"></a>

```typescript
public get(index: number): PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyVirtualMachineConfigurationAssignmentConfigurationParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>[]

---


### PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference <a name="PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer"></a>

```typescript
import { policyVirtualMachineConfigurationAssignment } from '@cdktf/provider-azurerm'

new policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyVirtualMachineConfigurationAssignmentConfigurationParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>

---


### PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference <a name="PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { policyVirtualMachineConfigurationAssignment } from '@cdktf/provider-azurerm'

new policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyVirtualMachineConfigurationAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a>

---



