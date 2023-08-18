# `azurerm_storage_account_local_user`

Refer to the Terraform Registory for docs: [`azurerm_storage_account_local_user`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user).

# `storageAccountLocalUser` Submodule <a name="`storageAccountLocalUser` Submodule" id="@cdktf/provider-azurerm.storageAccountLocalUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountLocalUser <a name="StorageAccountLocalUser" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user azurerm_storage_account_local_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

new storageAccountLocalUser.StorageAccountLocalUser(scope: Construct, id: string, config: StorageAccountLocalUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig">StorageAccountLocalUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig">StorageAccountLocalUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putPermissionScope">putPermissionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putSshAuthorizedKey">putSshAuthorizedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetHomeDirectory">resetHomeDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetPermissionScope">resetPermissionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshAuthorizedKey">resetSshAuthorizedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshKeyEnabled">resetSshKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshPasswordEnabled">resetSshPasswordEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPermissionScope` <a name="putPermissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putPermissionScope"></a>

```typescript
public putPermissionScope(value: IResolvable | StorageAccountLocalUserPermissionScope[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putPermissionScope.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>[]

---

##### `putSshAuthorizedKey` <a name="putSshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putSshAuthorizedKey"></a>

```typescript
public putSshAuthorizedKey(value: IResolvable | StorageAccountLocalUserSshAuthorizedKey[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putSshAuthorizedKey.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageAccountLocalUserTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

---

##### `resetHomeDirectory` <a name="resetHomeDirectory" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetHomeDirectory"></a>

```typescript
public resetHomeDirectory(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPermissionScope` <a name="resetPermissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetPermissionScope"></a>

```typescript
public resetPermissionScope(): void
```

##### `resetSshAuthorizedKey` <a name="resetSshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshAuthorizedKey"></a>

```typescript
public resetSshAuthorizedKey(): void
```

##### `resetSshKeyEnabled` <a name="resetSshKeyEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshKeyEnabled"></a>

```typescript
public resetSshKeyEnabled(): void
```

##### `resetSshPasswordEnabled` <a name="resetSshPasswordEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshPasswordEnabled"></a>

```typescript
public resetSshPasswordEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isConstruct"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

storageAccountLocalUser.StorageAccountLocalUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformElement"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

storageAccountLocalUser.StorageAccountLocalUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformResource"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

storageAccountLocalUser.StorageAccountLocalUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScope">permissionScope</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList">StorageAccountLocalUserPermissionScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sid">sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKey">sshAuthorizedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList">StorageAccountLocalUserSshAuthorizedKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference">StorageAccountLocalUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectoryInput">homeDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScopeInput">permissionScopeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKeyInput">sshAuthorizedKeyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabledInput">sshKeyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabledInput">sshPasswordEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectory">homeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabled">sshKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabled">sshPasswordEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `permissionScope`<sup>Required</sup> <a name="permissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScope"></a>

```typescript
public readonly permissionScope: StorageAccountLocalUserPermissionScopeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList">StorageAccountLocalUserPermissionScopeList</a>

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

---

##### `sshAuthorizedKey`<sup>Required</sup> <a name="sshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKey"></a>

```typescript
public readonly sshAuthorizedKey: StorageAccountLocalUserSshAuthorizedKeyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList">StorageAccountLocalUserSshAuthorizedKeyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeouts"></a>

```typescript
public readonly timeouts: StorageAccountLocalUserTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference">StorageAccountLocalUserTimeoutsOutputReference</a>

---

##### `homeDirectoryInput`<sup>Optional</sup> <a name="homeDirectoryInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectoryInput"></a>

```typescript
public readonly homeDirectoryInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionScopeInput`<sup>Optional</sup> <a name="permissionScopeInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScopeInput"></a>

```typescript
public readonly permissionScopeInput: IResolvable | StorageAccountLocalUserPermissionScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>[]

---

##### `sshAuthorizedKeyInput`<sup>Optional</sup> <a name="sshAuthorizedKeyInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKeyInput"></a>

```typescript
public readonly sshAuthorizedKeyInput: IResolvable | StorageAccountLocalUserSshAuthorizedKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>[]

---

##### `sshKeyEnabledInput`<sup>Optional</sup> <a name="sshKeyEnabledInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabledInput"></a>

```typescript
public readonly sshKeyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sshPasswordEnabledInput`<sup>Optional</sup> <a name="sshPasswordEnabledInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabledInput"></a>

```typescript
public readonly sshPasswordEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageAccountLocalUserTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

---

##### `homeDirectory`<sup>Required</sup> <a name="homeDirectory" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectory"></a>

```typescript
public readonly homeDirectory: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sshKeyEnabled`<sup>Required</sup> <a name="sshKeyEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabled"></a>

```typescript
public readonly sshKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sshPasswordEnabled`<sup>Required</sup> <a name="sshPasswordEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabled"></a>

```typescript
public readonly sshPasswordEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountLocalUserConfig <a name="StorageAccountLocalUserConfig" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.Initializer"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

const storageAccountLocalUserConfig: storageAccountLocalUser.StorageAccountLocalUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#name StorageAccountLocalUser#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#storage_account_id StorageAccountLocalUser#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.homeDirectory">homeDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#home_directory StorageAccountLocalUser#home_directory}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#id StorageAccountLocalUser#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.permissionScope">permissionScope</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>[]</code> | permission_scope block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshAuthorizedKey">sshAuthorizedKey</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>[]</code> | ssh_authorized_key block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshKeyEnabled">sshKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#ssh_key_enabled StorageAccountLocalUser#ssh_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshPasswordEnabled">sshPasswordEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#ssh_password_enabled StorageAccountLocalUser#ssh_password_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#name StorageAccountLocalUser#name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#storage_account_id StorageAccountLocalUser#storage_account_id}.

---

##### `homeDirectory`<sup>Optional</sup> <a name="homeDirectory" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.homeDirectory"></a>

```typescript
public readonly homeDirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#home_directory StorageAccountLocalUser#home_directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#id StorageAccountLocalUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissionScope`<sup>Optional</sup> <a name="permissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.permissionScope"></a>

```typescript
public readonly permissionScope: IResolvable | StorageAccountLocalUserPermissionScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>[]

permission_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#permission_scope StorageAccountLocalUser#permission_scope}

---

##### `sshAuthorizedKey`<sup>Optional</sup> <a name="sshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshAuthorizedKey"></a>

```typescript
public readonly sshAuthorizedKey: IResolvable | StorageAccountLocalUserSshAuthorizedKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>[]

ssh_authorized_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#ssh_authorized_key StorageAccountLocalUser#ssh_authorized_key}

---

##### `sshKeyEnabled`<sup>Optional</sup> <a name="sshKeyEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshKeyEnabled"></a>

```typescript
public readonly sshKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#ssh_key_enabled StorageAccountLocalUser#ssh_key_enabled}.

---

##### `sshPasswordEnabled`<sup>Optional</sup> <a name="sshPasswordEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshPasswordEnabled"></a>

```typescript
public readonly sshPasswordEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#ssh_password_enabled StorageAccountLocalUser#ssh_password_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageAccountLocalUserTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#timeouts StorageAccountLocalUser#timeouts}

---

### StorageAccountLocalUserPermissionScope <a name="StorageAccountLocalUserPermissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.Initializer"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

const storageAccountLocalUserPermissionScope: storageAccountLocalUser.StorageAccountLocalUserPermissionScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a></code> | permissions block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.resourceName">resourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#resource_name StorageAccountLocalUser#resource_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#service StorageAccountLocalUser#service}. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.permissions"></a>

```typescript
public readonly permissions: StorageAccountLocalUserPermissionScopePermissions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#permissions StorageAccountLocalUser#permissions}

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#resource_name StorageAccountLocalUser#resource_name}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#service StorageAccountLocalUser#service}.

---

### StorageAccountLocalUserPermissionScopePermissions <a name="StorageAccountLocalUserPermissionScopePermissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.Initializer"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

const storageAccountLocalUserPermissionScopePermissions: storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.create">create</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.delete">delete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.list">list</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#list StorageAccountLocalUser#list}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.read">read</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.write">write</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#write StorageAccountLocalUser#write}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.create"></a>

```typescript
public readonly create: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.delete"></a>

```typescript
public readonly delete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}.

---

##### `list`<sup>Optional</sup> <a name="list" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.list"></a>

```typescript
public readonly list: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#list StorageAccountLocalUser#list}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.read"></a>

```typescript
public readonly read: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}.

---

##### `write`<sup>Optional</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.write"></a>

```typescript
public readonly write: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#write StorageAccountLocalUser#write}.

---

### StorageAccountLocalUserSshAuthorizedKey <a name="StorageAccountLocalUserSshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.Initializer"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

const storageAccountLocalUserSshAuthorizedKey: storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#key StorageAccountLocalUser#key}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#description StorageAccountLocalUser#description}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#key StorageAccountLocalUser#key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#description StorageAccountLocalUser#description}.

---

### StorageAccountLocalUserTimeouts <a name="StorageAccountLocalUserTimeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.Initializer"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

const storageAccountLocalUserTimeouts: storageAccountLocalUser.StorageAccountLocalUserTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#update StorageAccountLocalUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_account_local_user#update StorageAccountLocalUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountLocalUserPermissionScopeList <a name="StorageAccountLocalUserPermissionScopeList" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

new storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.get"></a>

```typescript
public get(index: number): StorageAccountLocalUserPermissionScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountLocalUserPermissionScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>[]

---


### StorageAccountLocalUserPermissionScopeOutputReference <a name="StorageAccountLocalUserPermissionScopeOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

new storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions">putPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions"></a>

```typescript
public putPermissions(value: StorageAccountLocalUserPermissionScopePermissions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference">StorageAccountLocalUserPermissionScopePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissionsInput">permissionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissions"></a>

```typescript
public readonly permissions: StorageAccountLocalUserPermissionScopePermissionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference">StorageAccountLocalUserPermissionScopePermissionsOutputReference</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: StorageAccountLocalUserPermissionScopePermissions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountLocalUserPermissionScope;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>

---


### StorageAccountLocalUserPermissionScopePermissionsOutputReference <a name="StorageAccountLocalUserPermissionScopePermissionsOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

new storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetList">resetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetWrite">resetWrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetList` <a name="resetList" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetList"></a>

```typescript
public resetList(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetWrite` <a name="resetWrite" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetWrite"></a>

```typescript
public resetWrite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.createInput">createInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.deleteInput">deleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.listInput">listInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.readInput">readInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.writeInput">writeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.create">create</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.delete">delete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.list">list</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.read">read</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.write">write</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `listInput`<sup>Optional</sup> <a name="listInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.listInput"></a>

```typescript
public readonly listInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `writeInput`<sup>Optional</sup> <a name="writeInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.writeInput"></a>

```typescript
public readonly writeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.create"></a>

```typescript
public readonly create: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.delete"></a>

```typescript
public readonly delete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `list`<sup>Required</sup> <a name="list" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.list"></a>

```typescript
public readonly list: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.read"></a>

```typescript
public readonly read: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.write"></a>

```typescript
public readonly write: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountLocalUserPermissionScopePermissions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

---


### StorageAccountLocalUserSshAuthorizedKeyList <a name="StorageAccountLocalUserSshAuthorizedKeyList" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

new storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.get"></a>

```typescript
public get(index: number): StorageAccountLocalUserSshAuthorizedKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountLocalUserSshAuthorizedKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>[]

---


### StorageAccountLocalUserSshAuthorizedKeyOutputReference <a name="StorageAccountLocalUserSshAuthorizedKeyOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

new storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountLocalUserSshAuthorizedKey;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>

---


### StorageAccountLocalUserTimeoutsOutputReference <a name="StorageAccountLocalUserTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageAccountLocalUser } from '@cdktf/provider-azurerm'

new storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountLocalUserTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

---



