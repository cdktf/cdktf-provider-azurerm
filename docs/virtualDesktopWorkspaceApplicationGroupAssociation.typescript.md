# `azurerm_virtual_desktop_workspace_application_group_association`

Refer to the Terraform Registory for docs: [`azurerm_virtual_desktop_workspace_application_group_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association).

# `virtualDesktopWorkspaceApplicationGroupAssociation` Submodule <a name="`virtualDesktopWorkspaceApplicationGroupAssociation` Submodule" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopWorkspaceApplicationGroupAssociation <a name="VirtualDesktopWorkspaceApplicationGroupAssociation" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association azurerm_virtual_desktop_workspace_application_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer"></a>

```typescript
import { virtualDesktopWorkspaceApplicationGroupAssociation } from '@cdktf/provider-azurerm'

new virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation(scope: Construct, id: string, config: VirtualDesktopWorkspaceApplicationGroupAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig">VirtualDesktopWorkspaceApplicationGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig">VirtualDesktopWorkspaceApplicationGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isConstruct"></a>

```typescript
import { virtualDesktopWorkspaceApplicationGroupAssociation } from '@cdktf/provider-azurerm'

virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformElement"></a>

```typescript
import { virtualDesktopWorkspaceApplicationGroupAssociation } from '@cdktf/provider-azurerm'

virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformResource"></a>

```typescript
import { virtualDesktopWorkspaceApplicationGroupAssociation } from '@cdktf/provider-azurerm'

virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference">VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.applicationGroupIdInput">applicationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.applicationGroupId">applicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference">VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference</a>

---

##### `applicationGroupIdInput`<sup>Optional</sup> <a name="applicationGroupIdInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.applicationGroupIdInput"></a>

```typescript
public readonly applicationGroupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a> | cdktf.IResolvable

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `applicationGroupId`<sup>Required</sup> <a name="applicationGroupId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.applicationGroupId"></a>

```typescript
public readonly applicationGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopWorkspaceApplicationGroupAssociationConfig <a name="VirtualDesktopWorkspaceApplicationGroupAssociationConfig" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.Initializer"></a>

```typescript
import { virtualDesktopWorkspaceApplicationGroupAssociation } from '@cdktf/provider-azurerm'

const virtualDesktopWorkspaceApplicationGroupAssociationConfig: virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.applicationGroupId">applicationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#application_group_id VirtualDesktopWorkspaceApplicationGroupAssociation#application_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#workspace_id VirtualDesktopWorkspaceApplicationGroupAssociation#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#id VirtualDesktopWorkspaceApplicationGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationGroupId`<sup>Required</sup> <a name="applicationGroupId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.applicationGroupId"></a>

```typescript
public readonly applicationGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#application_group_id VirtualDesktopWorkspaceApplicationGroupAssociation#application_group_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#workspace_id VirtualDesktopWorkspaceApplicationGroupAssociation#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#id VirtualDesktopWorkspaceApplicationGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#timeouts VirtualDesktopWorkspaceApplicationGroupAssociation#timeouts}

---

### VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts <a name="VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.Initializer"></a>

```typescript
import { virtualDesktopWorkspaceApplicationGroupAssociation } from '@cdktf/provider-azurerm'

const virtualDesktopWorkspaceApplicationGroupAssociationTimeouts: virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#create VirtualDesktopWorkspaceApplicationGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#delete VirtualDesktopWorkspaceApplicationGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#read VirtualDesktopWorkspaceApplicationGroupAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#update VirtualDesktopWorkspaceApplicationGroupAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#create VirtualDesktopWorkspaceApplicationGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#delete VirtualDesktopWorkspaceApplicationGroupAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#read VirtualDesktopWorkspaceApplicationGroupAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/virtual_desktop_workspace_application_group_association#update VirtualDesktopWorkspaceApplicationGroupAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference <a name="VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualDesktopWorkspaceApplicationGroupAssociation } from '@cdktf/provider-azurerm'

new virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a> | cdktf.IResolvable

---



