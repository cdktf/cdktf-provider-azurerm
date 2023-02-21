# `managementGroupPolicyAssignment` Submodule <a name="`managementGroupPolicyAssignment` Submodule" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementGroupPolicyAssignment <a name="ManagementGroupPolicyAssignment" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment azurerm_management_group_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer"></a>

```typescript
import { managementGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new managementGroupPolicyAssignment.ManagementGroupPolicyAssignment(scope: Construct, id: string, config: ManagementGroupPolicyAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig">ManagementGroupPolicyAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig">ManagementGroupPolicyAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putNonComplianceMessage">putNonComplianceMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetNonComplianceMessage">resetNonComplianceMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetNotScopes">resetNotScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putIdentity"></a>

```typescript
public putIdentity(value: ManagementGroupPolicyAssignmentIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a>

---

##### `putNonComplianceMessage` <a name="putNonComplianceMessage" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putNonComplianceMessage"></a>

```typescript
public putNonComplianceMessage(value: IResolvable | ManagementGroupPolicyAssignmentNonComplianceMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putNonComplianceMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: ManagementGroupPolicyAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetEnforce"></a>

```typescript
public resetEnforce(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetNonComplianceMessage` <a name="resetNonComplianceMessage" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetNonComplianceMessage"></a>

```typescript
public resetNonComplianceMessage(): void
```

##### `resetNotScopes` <a name="resetNotScopes" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetNotScopes"></a>

```typescript
public resetNotScopes(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isConstruct"></a>

```typescript
import { managementGroupPolicyAssignment } from '@cdktf/provider-azurerm'

managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformElement"></a>

```typescript
import { managementGroupPolicyAssignment } from '@cdktf/provider-azurerm'

managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformResource"></a>

```typescript
import { managementGroupPolicyAssignment } from '@cdktf/provider-azurerm'

managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference">ManagementGroupPolicyAssignmentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nonComplianceMessage">nonComplianceMessage</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList">ManagementGroupPolicyAssignmentNonComplianceMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference">ManagementGroupPolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.enforceInput">enforceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.managementGroupIdInput">managementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nonComplianceMessageInput">nonComplianceMessageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.notScopesInput">notScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.policyDefinitionIdInput">policyDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.enforce">enforce</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.managementGroupId">managementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.notScopes">notScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.policyDefinitionId">policyDefinitionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.identity"></a>

```typescript
public readonly identity: ManagementGroupPolicyAssignmentIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference">ManagementGroupPolicyAssignmentIdentityOutputReference</a>

---

##### `nonComplianceMessage`<sup>Required</sup> <a name="nonComplianceMessage" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nonComplianceMessage"></a>

```typescript
public readonly nonComplianceMessage: ManagementGroupPolicyAssignmentNonComplianceMessageList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList">ManagementGroupPolicyAssignmentNonComplianceMessageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: ManagementGroupPolicyAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference">ManagementGroupPolicyAssignmentTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.enforceInput"></a>

```typescript
public readonly enforceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.identityInput"></a>

```typescript
public readonly identityInput: ManagementGroupPolicyAssignmentIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managementGroupIdInput`<sup>Optional</sup> <a name="managementGroupIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.managementGroupIdInput"></a>

```typescript
public readonly managementGroupIdInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nonComplianceMessageInput`<sup>Optional</sup> <a name="nonComplianceMessageInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nonComplianceMessageInput"></a>

```typescript
public readonly nonComplianceMessageInput: IResolvable | ManagementGroupPolicyAssignmentNonComplianceMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>[]

---

##### `notScopesInput`<sup>Optional</sup> <a name="notScopesInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.notScopesInput"></a>

```typescript
public readonly notScopesInput: string[];
```

- *Type:* string[]

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `policyDefinitionIdInput`<sup>Optional</sup> <a name="policyDefinitionIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.policyDefinitionIdInput"></a>

```typescript
public readonly policyDefinitionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ManagementGroupPolicyAssignmentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.enforce"></a>

```typescript
public readonly enforce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.managementGroupId"></a>

```typescript
public readonly managementGroupId: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notScopes`<sup>Required</sup> <a name="notScopes" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.notScopes"></a>

```typescript
public readonly notScopes: string[];
```

- *Type:* string[]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.policyDefinitionId"></a>

```typescript
public readonly policyDefinitionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementGroupPolicyAssignmentConfig <a name="ManagementGroupPolicyAssignmentConfig" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.Initializer"></a>

```typescript
import { managementGroupPolicyAssignment } from '@cdktf/provider-azurerm'

const managementGroupPolicyAssignmentConfig: managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.managementGroupId">managementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#management_group_id ManagementGroupPolicyAssignment#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#name ManagementGroupPolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.policyDefinitionId">policyDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#policy_definition_id ManagementGroupPolicyAssignment#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#description ManagementGroupPolicyAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#display_name ManagementGroupPolicyAssignment#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.enforce">enforce</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#enforce ManagementGroupPolicyAssignment#enforce}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#id ManagementGroupPolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#location ManagementGroupPolicyAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.metadata">metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#metadata ManagementGroupPolicyAssignment#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.nonComplianceMessage">nonComplianceMessage</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>[]</code> | non_compliance_message block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.notScopes">notScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#not_scopes ManagementGroupPolicyAssignment#not_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#parameters ManagementGroupPolicyAssignment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.managementGroupId"></a>

```typescript
public readonly managementGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#management_group_id ManagementGroupPolicyAssignment#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#name ManagementGroupPolicyAssignment#name}.

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.policyDefinitionId"></a>

```typescript
public readonly policyDefinitionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#policy_definition_id ManagementGroupPolicyAssignment#policy_definition_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#description ManagementGroupPolicyAssignment#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#display_name ManagementGroupPolicyAssignment#display_name}.

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.enforce"></a>

```typescript
public readonly enforce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#enforce ManagementGroupPolicyAssignment#enforce}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#id ManagementGroupPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.identity"></a>

```typescript
public readonly identity: ManagementGroupPolicyAssignmentIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#identity ManagementGroupPolicyAssignment#identity}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#location ManagementGroupPolicyAssignment#location}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#metadata ManagementGroupPolicyAssignment#metadata}.

---

##### `nonComplianceMessage`<sup>Optional</sup> <a name="nonComplianceMessage" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.nonComplianceMessage"></a>

```typescript
public readonly nonComplianceMessage: IResolvable | ManagementGroupPolicyAssignmentNonComplianceMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>[]

non_compliance_message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#non_compliance_message ManagementGroupPolicyAssignment#non_compliance_message}

---

##### `notScopes`<sup>Optional</sup> <a name="notScopes" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.notScopes"></a>

```typescript
public readonly notScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#not_scopes ManagementGroupPolicyAssignment#not_scopes}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#parameters ManagementGroupPolicyAssignment#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManagementGroupPolicyAssignmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#timeouts ManagementGroupPolicyAssignment#timeouts}

---

### ManagementGroupPolicyAssignmentIdentity <a name="ManagementGroupPolicyAssignmentIdentity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.Initializer"></a>

```typescript
import { managementGroupPolicyAssignment } from '@cdktf/provider-azurerm'

const managementGroupPolicyAssignmentIdentity: managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#type ManagementGroupPolicyAssignment#type}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#identity_ids ManagementGroupPolicyAssignment#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#type ManagementGroupPolicyAssignment#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#identity_ids ManagementGroupPolicyAssignment#identity_ids}.

---

### ManagementGroupPolicyAssignmentNonComplianceMessage <a name="ManagementGroupPolicyAssignmentNonComplianceMessage" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.Initializer"></a>

```typescript
import { managementGroupPolicyAssignment } from '@cdktf/provider-azurerm'

const managementGroupPolicyAssignmentNonComplianceMessage: managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#content ManagementGroupPolicyAssignment#content}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#policy_definition_reference_id ManagementGroupPolicyAssignment#policy_definition_reference_id}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#content ManagementGroupPolicyAssignment#content}.

---

##### `policyDefinitionReferenceId`<sup>Optional</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId"></a>

```typescript
public readonly policyDefinitionReferenceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#policy_definition_reference_id ManagementGroupPolicyAssignment#policy_definition_reference_id}.

---

### ManagementGroupPolicyAssignmentTimeouts <a name="ManagementGroupPolicyAssignmentTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.Initializer"></a>

```typescript
import { managementGroupPolicyAssignment } from '@cdktf/provider-azurerm'

const managementGroupPolicyAssignmentTimeouts: managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#create ManagementGroupPolicyAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#delete ManagementGroupPolicyAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#read ManagementGroupPolicyAssignment#read}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#update ManagementGroupPolicyAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#create ManagementGroupPolicyAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#delete ManagementGroupPolicyAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#read ManagementGroupPolicyAssignment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#update ManagementGroupPolicyAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementGroupPolicyAssignmentIdentityOutputReference <a name="ManagementGroupPolicyAssignmentIdentityOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer"></a>

```typescript
import { managementGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagementGroupPolicyAssignmentIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a>

---


### ManagementGroupPolicyAssignmentNonComplianceMessageList <a name="ManagementGroupPolicyAssignmentNonComplianceMessageList" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer"></a>

```typescript
import { managementGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.get"></a>

```typescript
public get(index: number): ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagementGroupPolicyAssignmentNonComplianceMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>[]

---


### ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference <a name="ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer"></a>

```typescript
import { managementGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId">resetPolicyDefinitionReferenceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyDefinitionReferenceId` <a name="resetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId"></a>

```typescript
public resetPolicyDefinitionReferenceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput">policyDefinitionReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="policyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput"></a>

```typescript
public readonly policyDefinitionReferenceIdInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceId`<sup>Required</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId"></a>

```typescript
public readonly policyDefinitionReferenceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagementGroupPolicyAssignmentNonComplianceMessage | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a> | cdktf.IResolvable

---


### ManagementGroupPolicyAssignmentTimeoutsOutputReference <a name="ManagementGroupPolicyAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { managementGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagementGroupPolicyAssignmentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a> | cdktf.IResolvable

---



