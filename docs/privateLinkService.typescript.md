# `azurerm_private_link_service`

Refer to the Terraform Registory for docs: [`azurerm_private_link_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service).

# `privateLinkService` Submodule <a name="`privateLinkService` Submodule" id="@cdktf/provider-azurerm.privateLinkService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateLinkService <a name="PrivateLinkService" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service azurerm_private_link_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.Initializer"></a>

```typescript
import { privateLinkService } from '@cdktf/provider-azurerm'

new privateLinkService.PrivateLinkService(scope: Construct, id: string, config: PrivateLinkServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig">PrivateLinkServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig">PrivateLinkServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.putNatIpConfiguration">putNatIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetAutoApprovalSubscriptionIds">resetAutoApprovalSubscriptionIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetEnableProxyProtocol">resetEnableProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetFqdns">resetFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetVisibilitySubscriptionIds">resetVisibilitySubscriptionIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putNatIpConfiguration` <a name="putNatIpConfiguration" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.putNatIpConfiguration"></a>

```typescript
public putNatIpConfiguration(value: IResolvable | PrivateLinkServiceNatIpConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.putNatIpConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration">PrivateLinkServiceNatIpConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivateLinkServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts">PrivateLinkServiceTimeouts</a>

---

##### `resetAutoApprovalSubscriptionIds` <a name="resetAutoApprovalSubscriptionIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetAutoApprovalSubscriptionIds"></a>

```typescript
public resetAutoApprovalSubscriptionIds(): void
```

##### `resetEnableProxyProtocol` <a name="resetEnableProxyProtocol" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetEnableProxyProtocol"></a>

```typescript
public resetEnableProxyProtocol(): void
```

##### `resetFqdns` <a name="resetFqdns" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetFqdns"></a>

```typescript
public resetFqdns(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVisibilitySubscriptionIds` <a name="resetVisibilitySubscriptionIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetVisibilitySubscriptionIds"></a>

```typescript
public resetVisibilitySubscriptionIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isConstruct"></a>

```typescript
import { privateLinkService } from '@cdktf/provider-azurerm'

privateLinkService.PrivateLinkService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isTerraformElement"></a>

```typescript
import { privateLinkService } from '@cdktf/provider-azurerm'

privateLinkService.PrivateLinkService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isTerraformResource"></a>

```typescript
import { privateLinkService } from '@cdktf/provider-azurerm'

privateLinkService.PrivateLinkService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.natIpConfiguration">natIpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList">PrivateLinkServiceNatIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference">PrivateLinkServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.autoApprovalSubscriptionIdsInput">autoApprovalSubscriptionIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.enableProxyProtocolInput">enableProxyProtocolInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.fqdnsInput">fqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.loadBalancerFrontendIpConfigurationIdsInput">loadBalancerFrontendIpConfigurationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.natIpConfigurationInput">natIpConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration">PrivateLinkServiceNatIpConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts">PrivateLinkServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.visibilitySubscriptionIdsInput">visibilitySubscriptionIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.autoApprovalSubscriptionIds">autoApprovalSubscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.fqdns">fqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.loadBalancerFrontendIpConfigurationIds">loadBalancerFrontendIpConfigurationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.visibilitySubscriptionIds">visibilitySubscriptionIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `natIpConfiguration`<sup>Required</sup> <a name="natIpConfiguration" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.natIpConfiguration"></a>

```typescript
public readonly natIpConfiguration: PrivateLinkServiceNatIpConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList">PrivateLinkServiceNatIpConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateLinkServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference">PrivateLinkServiceTimeoutsOutputReference</a>

---

##### `autoApprovalSubscriptionIdsInput`<sup>Optional</sup> <a name="autoApprovalSubscriptionIdsInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.autoApprovalSubscriptionIdsInput"></a>

```typescript
public readonly autoApprovalSubscriptionIdsInput: string[];
```

- *Type:* string[]

---

##### `enableProxyProtocolInput`<sup>Optional</sup> <a name="enableProxyProtocolInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.enableProxyProtocolInput"></a>

```typescript
public readonly enableProxyProtocolInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fqdnsInput`<sup>Optional</sup> <a name="fqdnsInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.fqdnsInput"></a>

```typescript
public readonly fqdnsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerFrontendIpConfigurationIdsInput`<sup>Optional</sup> <a name="loadBalancerFrontendIpConfigurationIdsInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.loadBalancerFrontendIpConfigurationIdsInput"></a>

```typescript
public readonly loadBalancerFrontendIpConfigurationIdsInput: string[];
```

- *Type:* string[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `natIpConfigurationInput`<sup>Optional</sup> <a name="natIpConfigurationInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.natIpConfigurationInput"></a>

```typescript
public readonly natIpConfigurationInput: IResolvable | PrivateLinkServiceNatIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration">PrivateLinkServiceNatIpConfiguration</a>[]

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivateLinkServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts">PrivateLinkServiceTimeouts</a>

---

##### `visibilitySubscriptionIdsInput`<sup>Optional</sup> <a name="visibilitySubscriptionIdsInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.visibilitySubscriptionIdsInput"></a>

```typescript
public readonly visibilitySubscriptionIdsInput: string[];
```

- *Type:* string[]

---

##### `autoApprovalSubscriptionIds`<sup>Required</sup> <a name="autoApprovalSubscriptionIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.autoApprovalSubscriptionIds"></a>

```typescript
public readonly autoApprovalSubscriptionIds: string[];
```

- *Type:* string[]

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.enableProxyProtocol"></a>

```typescript
public readonly enableProxyProtocol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fqdns`<sup>Required</sup> <a name="fqdns" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.fqdns"></a>

```typescript
public readonly fqdns: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerFrontendIpConfigurationIds`<sup>Required</sup> <a name="loadBalancerFrontendIpConfigurationIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.loadBalancerFrontendIpConfigurationIds"></a>

```typescript
public readonly loadBalancerFrontendIpConfigurationIds: string[];
```

- *Type:* string[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `visibilitySubscriptionIds`<sup>Required</sup> <a name="visibilitySubscriptionIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.visibilitySubscriptionIds"></a>

```typescript
public readonly visibilitySubscriptionIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateLinkServiceConfig <a name="PrivateLinkServiceConfig" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.Initializer"></a>

```typescript
import { privateLinkService } from '@cdktf/provider-azurerm'

const privateLinkServiceConfig: privateLinkService.PrivateLinkServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.loadBalancerFrontendIpConfigurationIds">loadBalancerFrontendIpConfigurationIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#load_balancer_frontend_ip_configuration_ids PrivateLinkService#load_balancer_frontend_ip_configuration_ids}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#location PrivateLinkService#location}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#name PrivateLinkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.natIpConfiguration">natIpConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration">PrivateLinkServiceNatIpConfiguration</a>[]</code> | nat_ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#resource_group_name PrivateLinkService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.autoApprovalSubscriptionIds">autoApprovalSubscriptionIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#auto_approval_subscription_ids PrivateLinkService#auto_approval_subscription_ids}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#enable_proxy_protocol PrivateLinkService#enable_proxy_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.fqdns">fqdns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#fqdns PrivateLinkService#fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#id PrivateLinkService#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#tags PrivateLinkService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts">PrivateLinkServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.visibilitySubscriptionIds">visibilitySubscriptionIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#visibility_subscription_ids PrivateLinkService#visibility_subscription_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `loadBalancerFrontendIpConfigurationIds`<sup>Required</sup> <a name="loadBalancerFrontendIpConfigurationIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.loadBalancerFrontendIpConfigurationIds"></a>

```typescript
public readonly loadBalancerFrontendIpConfigurationIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#load_balancer_frontend_ip_configuration_ids PrivateLinkService#load_balancer_frontend_ip_configuration_ids}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#location PrivateLinkService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#name PrivateLinkService#name}.

---

##### `natIpConfiguration`<sup>Required</sup> <a name="natIpConfiguration" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.natIpConfiguration"></a>

```typescript
public readonly natIpConfiguration: IResolvable | PrivateLinkServiceNatIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration">PrivateLinkServiceNatIpConfiguration</a>[]

nat_ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#nat_ip_configuration PrivateLinkService#nat_ip_configuration}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#resource_group_name PrivateLinkService#resource_group_name}.

---

##### `autoApprovalSubscriptionIds`<sup>Optional</sup> <a name="autoApprovalSubscriptionIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.autoApprovalSubscriptionIds"></a>

```typescript
public readonly autoApprovalSubscriptionIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#auto_approval_subscription_ids PrivateLinkService#auto_approval_subscription_ids}.

---

##### `enableProxyProtocol`<sup>Optional</sup> <a name="enableProxyProtocol" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.enableProxyProtocol"></a>

```typescript
public readonly enableProxyProtocol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#enable_proxy_protocol PrivateLinkService#enable_proxy_protocol}.

---

##### `fqdns`<sup>Optional</sup> <a name="fqdns" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.fqdns"></a>

```typescript
public readonly fqdns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#fqdns PrivateLinkService#fqdns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#id PrivateLinkService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#tags PrivateLinkService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateLinkServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts">PrivateLinkServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#timeouts PrivateLinkService#timeouts}

---

##### `visibilitySubscriptionIds`<sup>Optional</sup> <a name="visibilitySubscriptionIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.visibilitySubscriptionIds"></a>

```typescript
public readonly visibilitySubscriptionIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#visibility_subscription_ids PrivateLinkService#visibility_subscription_ids}.

---

### PrivateLinkServiceNatIpConfiguration <a name="PrivateLinkServiceNatIpConfiguration" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.Initializer"></a>

```typescript
import { privateLinkService } from '@cdktf/provider-azurerm'

const privateLinkServiceNatIpConfiguration: privateLinkService.PrivateLinkServiceNatIpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#name PrivateLinkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#primary PrivateLinkService#primary}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#subnet_id PrivateLinkService#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#private_ip_address PrivateLinkService#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.privateIpAddressVersion">privateIpAddressVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#private_ip_address_version PrivateLinkService#private_ip_address_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#name PrivateLinkService#name}.

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#primary PrivateLinkService#primary}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#subnet_id PrivateLinkService#subnet_id}.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#private_ip_address PrivateLinkService#private_ip_address}.

---

##### `privateIpAddressVersion`<sup>Optional</sup> <a name="privateIpAddressVersion" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.privateIpAddressVersion"></a>

```typescript
public readonly privateIpAddressVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#private_ip_address_version PrivateLinkService#private_ip_address_version}.

---

### PrivateLinkServiceTimeouts <a name="PrivateLinkServiceTimeouts" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.Initializer"></a>

```typescript
import { privateLinkService } from '@cdktf/provider-azurerm'

const privateLinkServiceTimeouts: privateLinkService.PrivateLinkServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#create PrivateLinkService#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#delete PrivateLinkService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#read PrivateLinkService#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#update PrivateLinkService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#create PrivateLinkService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#delete PrivateLinkService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#read PrivateLinkService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/private_link_service#update PrivateLinkService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateLinkServiceNatIpConfigurationList <a name="PrivateLinkServiceNatIpConfigurationList" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.Initializer"></a>

```typescript
import { privateLinkService } from '@cdktf/provider-azurerm'

new privateLinkService.PrivateLinkServiceNatIpConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.get"></a>

```typescript
public get(index: number): PrivateLinkServiceNatIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration">PrivateLinkServiceNatIpConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateLinkServiceNatIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration">PrivateLinkServiceNatIpConfiguration</a>[]

---


### PrivateLinkServiceNatIpConfigurationOutputReference <a name="PrivateLinkServiceNatIpConfigurationOutputReference" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer"></a>

```typescript
import { privateLinkService } from '@cdktf/provider-azurerm'

new privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.resetPrivateIpAddressVersion">resetPrivateIpAddressVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.resetPrivateIpAddress"></a>

```typescript
public resetPrivateIpAddress(): void
```

##### `resetPrivateIpAddressVersion` <a name="resetPrivateIpAddressVersion" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.resetPrivateIpAddressVersion"></a>

```typescript
public resetPrivateIpAddressVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddressVersionInput">privateIpAddressVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddressVersion">privateIpAddressVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration">PrivateLinkServiceNatIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `privateIpAddressVersionInput`<sup>Optional</sup> <a name="privateIpAddressVersionInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddressVersionInput"></a>

```typescript
public readonly privateIpAddressVersionInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `privateIpAddressVersion`<sup>Required</sup> <a name="privateIpAddressVersion" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddressVersion"></a>

```typescript
public readonly privateIpAddressVersion: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateLinkServiceNatIpConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration">PrivateLinkServiceNatIpConfiguration</a>

---


### PrivateLinkServiceTimeoutsOutputReference <a name="PrivateLinkServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { privateLinkService } from '@cdktf/provider-azurerm'

new privateLinkService.PrivateLinkServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts">PrivateLinkServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateLinkServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts">PrivateLinkServiceTimeouts</a>

---



