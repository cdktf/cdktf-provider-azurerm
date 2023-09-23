# `azurerm_app_service_certificate_order`

Refer to the Terraform Registory for docs: [`azurerm_app_service_certificate_order`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order).

# `appServiceCertificateOrder` Submodule <a name="`appServiceCertificateOrder` Submodule" id="@cdktf/provider-azurerm.appServiceCertificateOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceCertificateOrder <a name="AppServiceCertificateOrder" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order azurerm_app_service_certificate_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktf/provider-azurerm'

new appServiceCertificateOrder.AppServiceCertificateOrder(scope: Construct, id: string, config: AppServiceCertificateOrderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig">AppServiceCertificateOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig">AppServiceCertificateOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetCsr">resetCsr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetDistinguishedName">resetDistinguishedName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetProductType">resetProductType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetValidityInYears">resetValidityInYears</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.putTimeouts"></a>

```typescript
public putTimeouts(value: AppServiceCertificateOrderTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

---

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetAutoRenew"></a>

```typescript
public resetAutoRenew(): void
```

##### `resetCsr` <a name="resetCsr" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetCsr"></a>

```typescript
public resetCsr(): void
```

##### `resetDistinguishedName` <a name="resetDistinguishedName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetDistinguishedName"></a>

```typescript
public resetDistinguishedName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeySize` <a name="resetKeySize" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetKeySize"></a>

```typescript
public resetKeySize(): void
```

##### `resetProductType` <a name="resetProductType" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetProductType"></a>

```typescript
public resetProductType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidityInYears` <a name="resetValidityInYears" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetValidityInYears"></a>

```typescript
public resetValidityInYears(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isConstruct"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktf/provider-azurerm'

appServiceCertificateOrder.AppServiceCertificateOrder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformElement"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktf/provider-azurerm'

appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformResource"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktf/provider-azurerm'

appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.appServiceCertificateNotRenewableReasons">appServiceCertificateNotRenewableReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList">AppServiceCertificateOrderCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.domainVerificationToken">domainVerificationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.intermediateThumbprint">intermediateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.isPrivateKeyExternal">isPrivateKeyExternal</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.rootThumbprint">rootThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.signedCertificateThumbprint">signedCertificateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference">AppServiceCertificateOrderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenewInput">autoRenewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csrInput">csrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedNameInput">distinguishedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySizeInput">keySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productTypeInput">productTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYearsInput">validityInYearsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csr">csr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedName">distinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySize">keySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productType">productType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYears">validityInYears</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appServiceCertificateNotRenewableReasons`<sup>Required</sup> <a name="appServiceCertificateNotRenewableReasons" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.appServiceCertificateNotRenewableReasons"></a>

```typescript
public readonly appServiceCertificateNotRenewableReasons: string[];
```

- *Type:* string[]

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.certificates"></a>

```typescript
public readonly certificates: AppServiceCertificateOrderCertificatesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList">AppServiceCertificateOrderCertificatesList</a>

---

##### `domainVerificationToken`<sup>Required</sup> <a name="domainVerificationToken" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.domainVerificationToken"></a>

```typescript
public readonly domainVerificationToken: string;
```

- *Type:* string

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `intermediateThumbprint`<sup>Required</sup> <a name="intermediateThumbprint" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.intermediateThumbprint"></a>

```typescript
public readonly intermediateThumbprint: string;
```

- *Type:* string

---

##### `isPrivateKeyExternal`<sup>Required</sup> <a name="isPrivateKeyExternal" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.isPrivateKeyExternal"></a>

```typescript
public readonly isPrivateKeyExternal: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `rootThumbprint`<sup>Required</sup> <a name="rootThumbprint" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.rootThumbprint"></a>

```typescript
public readonly rootThumbprint: string;
```

- *Type:* string

---

##### `signedCertificateThumbprint`<sup>Required</sup> <a name="signedCertificateThumbprint" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.signedCertificateThumbprint"></a>

```typescript
public readonly signedCertificateThumbprint: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceCertificateOrderTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference">AppServiceCertificateOrderTimeoutsOutputReference</a>

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenewInput"></a>

```typescript
public readonly autoRenewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `csrInput`<sup>Optional</sup> <a name="csrInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csrInput"></a>

```typescript
public readonly csrInput: string;
```

- *Type:* string

---

##### `distinguishedNameInput`<sup>Optional</sup> <a name="distinguishedNameInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedNameInput"></a>

```typescript
public readonly distinguishedNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySizeInput"></a>

```typescript
public readonly keySizeInput: number;
```

- *Type:* number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productTypeInput`<sup>Optional</sup> <a name="productTypeInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productTypeInput"></a>

```typescript
public readonly productTypeInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppServiceCertificateOrderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

---

##### `validityInYearsInput`<sup>Optional</sup> <a name="validityInYearsInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYearsInput"></a>

```typescript
public readonly validityInYearsInput: number;
```

- *Type:* number

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csr"></a>

```typescript
public readonly csr: string;
```

- *Type:* string

---

##### `distinguishedName`<sup>Required</sup> <a name="distinguishedName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedName"></a>

```typescript
public readonly distinguishedName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `productType`<sup>Required</sup> <a name="productType" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productType"></a>

```typescript
public readonly productType: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validityInYears`<sup>Required</sup> <a name="validityInYears" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYears"></a>

```typescript
public readonly validityInYears: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceCertificateOrderCertificates <a name="AppServiceCertificateOrderCertificates" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates.Initializer"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktf/provider-azurerm'

const appServiceCertificateOrderCertificates: appServiceCertificateOrder.AppServiceCertificateOrderCertificates = { ... }
```


### AppServiceCertificateOrderConfig <a name="AppServiceCertificateOrderConfig" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.Initializer"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktf/provider-azurerm'

const appServiceCertificateOrderConfig: appServiceCertificateOrder.AppServiceCertificateOrderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#location AppServiceCertificateOrder#location}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#name AppServiceCertificateOrder#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#resource_group_name AppServiceCertificateOrder#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#auto_renew AppServiceCertificateOrder#auto_renew}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.csr">csr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#csr AppServiceCertificateOrder#csr}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.distinguishedName">distinguishedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#distinguished_name AppServiceCertificateOrder#distinguished_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#id AppServiceCertificateOrder#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.keySize">keySize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#key_size AppServiceCertificateOrder#key_size}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.productType">productType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#product_type AppServiceCertificateOrder#product_type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#tags AppServiceCertificateOrder#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.validityInYears">validityInYears</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#validity_in_years AppServiceCertificateOrder#validity_in_years}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#location AppServiceCertificateOrder#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#name AppServiceCertificateOrder#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#resource_group_name AppServiceCertificateOrder#resource_group_name}.

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#auto_renew AppServiceCertificateOrder#auto_renew}.

---

##### `csr`<sup>Optional</sup> <a name="csr" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.csr"></a>

```typescript
public readonly csr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#csr AppServiceCertificateOrder#csr}.

---

##### `distinguishedName`<sup>Optional</sup> <a name="distinguishedName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.distinguishedName"></a>

```typescript
public readonly distinguishedName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#distinguished_name AppServiceCertificateOrder#distinguished_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#id AppServiceCertificateOrder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#key_size AppServiceCertificateOrder#key_size}.

---

##### `productType`<sup>Optional</sup> <a name="productType" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.productType"></a>

```typescript
public readonly productType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#product_type AppServiceCertificateOrder#product_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#tags AppServiceCertificateOrder#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceCertificateOrderTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#timeouts AppServiceCertificateOrder#timeouts}

---

##### `validityInYears`<sup>Optional</sup> <a name="validityInYears" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.validityInYears"></a>

```typescript
public readonly validityInYears: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#validity_in_years AppServiceCertificateOrder#validity_in_years}.

---

### AppServiceCertificateOrderTimeouts <a name="AppServiceCertificateOrderTimeouts" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.Initializer"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktf/provider-azurerm'

const appServiceCertificateOrderTimeouts: appServiceCertificateOrder.AppServiceCertificateOrderTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#create AppServiceCertificateOrder#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#delete AppServiceCertificateOrder#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#read AppServiceCertificateOrder#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#update AppServiceCertificateOrder#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#create AppServiceCertificateOrder#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#delete AppServiceCertificateOrder#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#read AppServiceCertificateOrder#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_certificate_order#update AppServiceCertificateOrder#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceCertificateOrderCertificatesList <a name="AppServiceCertificateOrderCertificatesList" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktf/provider-azurerm'

new appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.get"></a>

```typescript
public get(index: number): AppServiceCertificateOrderCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AppServiceCertificateOrderCertificatesOutputReference <a name="AppServiceCertificateOrderCertificatesOutputReference" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktf/provider-azurerm'

new appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultSecretName">keyVaultSecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.provisioningState">provisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates">AppServiceCertificateOrderCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `keyVaultSecretName`<sup>Required</sup> <a name="keyVaultSecretName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultSecretName"></a>

```typescript
public readonly keyVaultSecretName: string;
```

- *Type:* string

---

##### `provisioningState`<sup>Required</sup> <a name="provisioningState" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.provisioningState"></a>

```typescript
public readonly provisioningState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceCertificateOrderCertificates;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates">AppServiceCertificateOrderCertificates</a>

---


### AppServiceCertificateOrderTimeoutsOutputReference <a name="AppServiceCertificateOrderTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktf/provider-azurerm'

new appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceCertificateOrderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

---



