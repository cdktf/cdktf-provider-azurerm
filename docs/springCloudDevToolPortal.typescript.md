# `azurerm_spring_cloud_dev_tool_portal`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_dev_tool_portal`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal).

# `springCloudDevToolPortal` Submodule <a name="`springCloudDevToolPortal` Submodule" id="@cdktf/provider-azurerm.springCloudDevToolPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudDevToolPortal <a name="SpringCloudDevToolPortal" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal azurerm_spring_cloud_dev_tool_portal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer"></a>

```typescript
import { springCloudDevToolPortal } from '@cdktf/provider-azurerm'

new springCloudDevToolPortal.SpringCloudDevToolPortal(scope: Construct, id: string, config: SpringCloudDevToolPortalConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig">SpringCloudDevToolPortalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig">SpringCloudDevToolPortalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putSso">putSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetApplicationAcceleratorEnabled">resetApplicationAcceleratorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetApplicationLiveViewEnabled">resetApplicationLiveViewEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetSso">resetSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSso` <a name="putSso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putSso"></a>

```typescript
public putSso(value: SpringCloudDevToolPortalSso): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putSso.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putTimeouts"></a>

```typescript
public putTimeouts(value: SpringCloudDevToolPortalTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts">SpringCloudDevToolPortalTimeouts</a>

---

##### `resetApplicationAcceleratorEnabled` <a name="resetApplicationAcceleratorEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetApplicationAcceleratorEnabled"></a>

```typescript
public resetApplicationAcceleratorEnabled(): void
```

##### `resetApplicationLiveViewEnabled` <a name="resetApplicationLiveViewEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetApplicationLiveViewEnabled"></a>

```typescript
public resetApplicationLiveViewEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetSso` <a name="resetSso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetSso"></a>

```typescript
public resetSso(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isConstruct"></a>

```typescript
import { springCloudDevToolPortal } from '@cdktf/provider-azurerm'

springCloudDevToolPortal.SpringCloudDevToolPortal.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformElement"></a>

```typescript
import { springCloudDevToolPortal } from '@cdktf/provider-azurerm'

springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformResource"></a>

```typescript
import { springCloudDevToolPortal } from '@cdktf/provider-azurerm'

springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.sso">sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference">SpringCloudDevToolPortalSsoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference">SpringCloudDevToolPortalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationAcceleratorEnabledInput">applicationAcceleratorEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationLiveViewEnabledInput">applicationLiveViewEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.springCloudServiceIdInput">springCloudServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.ssoInput">ssoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts">SpringCloudDevToolPortalTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationAcceleratorEnabled">applicationAcceleratorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationLiveViewEnabled">applicationLiveViewEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.springCloudServiceId">springCloudServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sso`<sup>Required</sup> <a name="sso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.sso"></a>

```typescript
public readonly sso: SpringCloudDevToolPortalSsoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference">SpringCloudDevToolPortalSsoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudDevToolPortalTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference">SpringCloudDevToolPortalTimeoutsOutputReference</a>

---

##### `applicationAcceleratorEnabledInput`<sup>Optional</sup> <a name="applicationAcceleratorEnabledInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationAcceleratorEnabledInput"></a>

```typescript
public readonly applicationAcceleratorEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `applicationLiveViewEnabledInput`<sup>Optional</sup> <a name="applicationLiveViewEnabledInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationLiveViewEnabledInput"></a>

```typescript
public readonly applicationLiveViewEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `springCloudServiceIdInput`<sup>Optional</sup> <a name="springCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.springCloudServiceIdInput"></a>

```typescript
public readonly springCloudServiceIdInput: string;
```

- *Type:* string

---

##### `ssoInput`<sup>Optional</sup> <a name="ssoInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.ssoInput"></a>

```typescript
public readonly ssoInput: SpringCloudDevToolPortalSso;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpringCloudDevToolPortalTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts">SpringCloudDevToolPortalTimeouts</a>

---

##### `applicationAcceleratorEnabled`<sup>Required</sup> <a name="applicationAcceleratorEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationAcceleratorEnabled"></a>

```typescript
public readonly applicationAcceleratorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `applicationLiveViewEnabled`<sup>Required</sup> <a name="applicationLiveViewEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationLiveViewEnabled"></a>

```typescript
public readonly applicationLiveViewEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.springCloudServiceId"></a>

```typescript
public readonly springCloudServiceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudDevToolPortalConfig <a name="SpringCloudDevToolPortalConfig" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.Initializer"></a>

```typescript
import { springCloudDevToolPortal } from '@cdktf/provider-azurerm'

const springCloudDevToolPortalConfig: springCloudDevToolPortal.SpringCloudDevToolPortalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#name SpringCloudDevToolPortal#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.springCloudServiceId">springCloudServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#spring_cloud_service_id SpringCloudDevToolPortal#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.applicationAcceleratorEnabled">applicationAcceleratorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#application_accelerator_enabled SpringCloudDevToolPortal#application_accelerator_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.applicationLiveViewEnabled">applicationLiveViewEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#application_live_view_enabled SpringCloudDevToolPortal#application_live_view_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#id SpringCloudDevToolPortal#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#public_network_access_enabled SpringCloudDevToolPortal#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.sso">sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a></code> | sso block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts">SpringCloudDevToolPortalTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#name SpringCloudDevToolPortal#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.springCloudServiceId"></a>

```typescript
public readonly springCloudServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#spring_cloud_service_id SpringCloudDevToolPortal#spring_cloud_service_id}.

---

##### `applicationAcceleratorEnabled`<sup>Optional</sup> <a name="applicationAcceleratorEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.applicationAcceleratorEnabled"></a>

```typescript
public readonly applicationAcceleratorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#application_accelerator_enabled SpringCloudDevToolPortal#application_accelerator_enabled}.

---

##### `applicationLiveViewEnabled`<sup>Optional</sup> <a name="applicationLiveViewEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.applicationLiveViewEnabled"></a>

```typescript
public readonly applicationLiveViewEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#application_live_view_enabled SpringCloudDevToolPortal#application_live_view_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#id SpringCloudDevToolPortal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#public_network_access_enabled SpringCloudDevToolPortal#public_network_access_enabled}.

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.sso"></a>

```typescript
public readonly sso: SpringCloudDevToolPortalSso;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a>

sso block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#sso SpringCloudDevToolPortal#sso}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudDevToolPortalTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts">SpringCloudDevToolPortalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#timeouts SpringCloudDevToolPortal#timeouts}

---

### SpringCloudDevToolPortalSso <a name="SpringCloudDevToolPortalSso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.Initializer"></a>

```typescript
import { springCloudDevToolPortal } from '@cdktf/provider-azurerm'

const springCloudDevToolPortalSso: springCloudDevToolPortal.SpringCloudDevToolPortalSso = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#client_id SpringCloudDevToolPortal#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#client_secret SpringCloudDevToolPortal#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.metadataUrl">metadataUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#metadata_url SpringCloudDevToolPortal#metadata_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.scope">scope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#scope SpringCloudDevToolPortal#scope}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#client_id SpringCloudDevToolPortal#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#client_secret SpringCloudDevToolPortal#client_secret}.

---

##### `metadataUrl`<sup>Optional</sup> <a name="metadataUrl" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.metadataUrl"></a>

```typescript
public readonly metadataUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#metadata_url SpringCloudDevToolPortal#metadata_url}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.scope"></a>

```typescript
public readonly scope: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#scope SpringCloudDevToolPortal#scope}.

---

### SpringCloudDevToolPortalTimeouts <a name="SpringCloudDevToolPortalTimeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.Initializer"></a>

```typescript
import { springCloudDevToolPortal } from '@cdktf/provider-azurerm'

const springCloudDevToolPortalTimeouts: springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#create SpringCloudDevToolPortal#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#delete SpringCloudDevToolPortal#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#read SpringCloudDevToolPortal#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#update SpringCloudDevToolPortal#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#create SpringCloudDevToolPortal#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#delete SpringCloudDevToolPortal#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#read SpringCloudDevToolPortal#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_dev_tool_portal#update SpringCloudDevToolPortal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudDevToolPortalSsoOutputReference <a name="SpringCloudDevToolPortalSsoOutputReference" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer"></a>

```typescript
import { springCloudDevToolPortal } from '@cdktf/provider-azurerm'

new springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetMetadataUrl">resetMetadataUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetMetadataUrl` <a name="resetMetadataUrl" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetMetadataUrl"></a>

```typescript
public resetMetadataUrl(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.metadataUrlInput">metadataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.scopeInput">scopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.metadataUrl">metadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.scope">scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `metadataUrlInput`<sup>Optional</sup> <a name="metadataUrlInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.metadataUrlInput"></a>

```typescript
public readonly metadataUrlInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `metadataUrl`<sup>Required</sup> <a name="metadataUrl" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.metadataUrl"></a>

```typescript
public readonly metadataUrl: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.scope"></a>

```typescript
public readonly scope: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudDevToolPortalSso;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a>

---


### SpringCloudDevToolPortalTimeoutsOutputReference <a name="SpringCloudDevToolPortalTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer"></a>

```typescript
import { springCloudDevToolPortal } from '@cdktf/provider-azurerm'

new springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts">SpringCloudDevToolPortalTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudDevToolPortalTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts">SpringCloudDevToolPortalTimeouts</a>

---



