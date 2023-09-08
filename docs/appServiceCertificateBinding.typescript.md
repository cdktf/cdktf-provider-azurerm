# `azurerm_app_service_certificate_binding`

Refer to the Terraform Registory for docs: [`azurerm_app_service_certificate_binding`](https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding).

# `appServiceCertificateBinding` Submodule <a name="`appServiceCertificateBinding` Submodule" id="@cdktf/provider-azurerm.appServiceCertificateBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceCertificateBinding <a name="AppServiceCertificateBinding" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding azurerm_app_service_certificate_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.Initializer"></a>

```typescript
import { appServiceCertificateBinding } from '@cdktf/provider-azurerm'

new appServiceCertificateBinding.AppServiceCertificateBinding(scope: Construct, id: string, config: AppServiceCertificateBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig">AppServiceCertificateBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig">AppServiceCertificateBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: AppServiceCertificateBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts">AppServiceCertificateBindingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.isConstruct"></a>

```typescript
import { appServiceCertificateBinding } from '@cdktf/provider-azurerm'

appServiceCertificateBinding.AppServiceCertificateBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.isTerraformElement"></a>

```typescript
import { appServiceCertificateBinding } from '@cdktf/provider-azurerm'

appServiceCertificateBinding.AppServiceCertificateBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.isTerraformResource"></a>

```typescript
import { appServiceCertificateBinding } from '@cdktf/provider-azurerm'

appServiceCertificateBinding.AppServiceCertificateBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.appServiceName">appServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference">AppServiceCertificateBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.hostnameBindingIdInput">hostnameBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.sslStateInput">sslStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts">AppServiceCertificateBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.hostnameBindingId">hostnameBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.sslState">sslState</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appServiceName`<sup>Required</sup> <a name="appServiceName" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.appServiceName"></a>

```typescript
public readonly appServiceName: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceCertificateBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference">AppServiceCertificateBindingTimeoutsOutputReference</a>

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `hostnameBindingIdInput`<sup>Optional</sup> <a name="hostnameBindingIdInput" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.hostnameBindingIdInput"></a>

```typescript
public readonly hostnameBindingIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sslStateInput`<sup>Optional</sup> <a name="sslStateInput" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.sslStateInput"></a>

```typescript
public readonly sslStateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppServiceCertificateBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts">AppServiceCertificateBindingTimeouts</a>

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `hostnameBindingId`<sup>Required</sup> <a name="hostnameBindingId" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.hostnameBindingId"></a>

```typescript
public readonly hostnameBindingId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sslState`<sup>Required</sup> <a name="sslState" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.sslState"></a>

```typescript
public readonly sslState: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceCertificateBindingConfig <a name="AppServiceCertificateBindingConfig" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.Initializer"></a>

```typescript
import { appServiceCertificateBinding } from '@cdktf/provider-azurerm'

const appServiceCertificateBindingConfig: appServiceCertificateBinding.AppServiceCertificateBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.certificateId">certificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#certificate_id AppServiceCertificateBinding#certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.hostnameBindingId">hostnameBindingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#hostname_binding_id AppServiceCertificateBinding#hostname_binding_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.sslState">sslState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#ssl_state AppServiceCertificateBinding#ssl_state}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#id AppServiceCertificateBinding#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts">AppServiceCertificateBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#certificate_id AppServiceCertificateBinding#certificate_id}.

---

##### `hostnameBindingId`<sup>Required</sup> <a name="hostnameBindingId" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.hostnameBindingId"></a>

```typescript
public readonly hostnameBindingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#hostname_binding_id AppServiceCertificateBinding#hostname_binding_id}.

---

##### `sslState`<sup>Required</sup> <a name="sslState" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.sslState"></a>

```typescript
public readonly sslState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#ssl_state AppServiceCertificateBinding#ssl_state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#id AppServiceCertificateBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceCertificateBindingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts">AppServiceCertificateBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#timeouts AppServiceCertificateBinding#timeouts}

---

### AppServiceCertificateBindingTimeouts <a name="AppServiceCertificateBindingTimeouts" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts.Initializer"></a>

```typescript
import { appServiceCertificateBinding } from '@cdktf/provider-azurerm'

const appServiceCertificateBindingTimeouts: appServiceCertificateBinding.AppServiceCertificateBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#create AppServiceCertificateBinding#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#delete AppServiceCertificateBinding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#read AppServiceCertificateBinding#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#create AppServiceCertificateBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#delete AppServiceCertificateBinding#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.72.0/docs/resources/app_service_certificate_binding#read AppServiceCertificateBinding#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceCertificateBindingTimeoutsOutputReference <a name="AppServiceCertificateBindingTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { appServiceCertificateBinding } from '@cdktf/provider-azurerm'

new appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts">AppServiceCertificateBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceCertificateBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceCertificateBinding.AppServiceCertificateBindingTimeouts">AppServiceCertificateBindingTimeouts</a>

---



